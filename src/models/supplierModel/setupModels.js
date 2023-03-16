const { createNewSupplier } = require("./index");
const { createSupplierAvatar } = require("./supplierAvatar");
const { createSupplierAddress } = require("./supplierAddress");

function setupSupplierModels(sequelize) {
    try {
        // Create supplier models
        const Supplier = createNewSupplier(sequelize);
        const SupplierAvatar = createSupplierAvatar(sequelize);
        const SupplierAddress = createSupplierAddress(sequelize);

        // *** Supplier 1:1 association ***
        Supplier.hasOne(SupplierAvatar, {
            onDelete: "CASCADE",
            foreignKey: "supplier_id",
            as: "avatar",
        });
        Supplier.hasOne(SupplierAddress, {
            onDelete: "CASCADE",
            foreignKey: "supplier_id",
            as: "address",
        });

        return {
            Supplier,
            SupplierAvatar,
            SupplierAddress,
        };
    } catch (error) {
        throw error;
    }
}

module.exports = { setupSupplierModels };
