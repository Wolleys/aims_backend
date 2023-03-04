const { sequelize } = require("../dbConfig");
const { Supplier } = require("./supplierModel");
const { Organization } = require("../Organization/organizationModel");
const { SupplierAvatar } = require("../SupplierAvatar/supplierAvatarModel");
const { SupplierAddress } = require("../SupplierAddress/supplierAddressModel");

const createNewSupplier = async (newSupplier, organizationId) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();

        const confirmIdParam = await Organization().findOne({
            where: { id: organizationId },
        });
        if (!confirmIdParam) {
            throw {
                status: 404,
                message: `Can't find an organization with the id '${organizationId}'`,
            };
        }

        const isAlreadyAdded = await Supplier().findOne({
            where: { email: newSupplier.email },
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
            supplierId: createdSupplier.id,
        };

        const avatar = {
            supplierId: createdSupplier.id,
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
