const { sequelize } = require("../dbConfig");
const { Supplier } = require("./supplierModel");
const { isAlreadyAdded } = require("../helpers/isAlreadyAdded");
const { checkOrganization } = require("../helpers/checkOrganization");
const { SupplierAvatar } = require("../SupplierAvatar/supplierAvatarModel");
const { SupplierAddress } = require("../SupplierAddress/supplierAddressModel");

const createNewSupplier = async (newSupplier, organizationId) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        await checkOrganization(organizationId);

        // Check if email already exists
        const emailCol = "email";
        const emailVal = newSupplier.email;
        const emailAttrs = ["email", "organization_id"];
        await isAlreadyAdded(Supplier, emailCol, emailVal, organizationId, emailAttrs);

        const createdSupplier = await Supplier().create(newSupplier, {
            transaction,
        });

        const address = {
            ...newSupplier,
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
