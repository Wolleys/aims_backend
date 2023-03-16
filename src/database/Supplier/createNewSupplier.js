const { sequelize } = require("../dbConfig");
const { Supplier } = require("./supplierModel");
const { checkOrganization } = require("../helpers/checkOrganization");
const { SupplierAvatar } = require("../SupplierAvatar/supplierAvatarModel");
const { SupplierAddress } = require("../SupplierAddress/supplierAddressModel");

const createNewSupplier = async (newSupplier, organizationId) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        await checkOrganization(organizationId);

        const isAlreadyAdded = await Supplier().findOne({
            where: { email: newSupplier.email },
            attributes: ["email"],
        });
        if (isAlreadyAdded) {
            throw {
                status: 400,
                message: `'${newSupplier.email}' is already in use!`,
            };
        }

        const createdSupplier = await Supplier().create(newSupplier, {
            transaction,
        });

        const address = {
            country: newSupplier.country,
            address_line_1: newSupplier.address_line_1,
            address_line_2: newSupplier.address_line_2,
            city: newSupplier.city,
            region: newSupplier.region,
            postal_code: newSupplier.postal_code,
            supplier_id: createdSupplier.id,
        };

        const avatar = {
            supplier_id: createdSupplier.id,
        };

        await SupplierAvatar().create(avatar, { transaction });
        await SupplierAddress().create(address, { transaction });
        await transaction.commit();

        return createdSupplier;
    } catch (error) {
        if (transaction) {
            transaction.rollback();
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { createNewSupplier };
