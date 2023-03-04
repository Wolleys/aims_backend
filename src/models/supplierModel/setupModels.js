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
        // Supplier has one avatar (belongsTo) 1:1
        // Supplier has one address (belongsTo) 1:1
        Supplier.hasOne(SupplierAvatar, { onDelete: "CASCADE" });
        Supplier.hasOne(SupplierAddress, { onDelete: "CASCADE" });
        SupplierAvatar.belongsTo(Supplier);
        SupplierAddress.belongsTo(Supplier);
        
        return {
            Supplier,
            SupplierAvatar,
            SupplierAddress
        }
    } catch (error) {
        throw error;
    }
}

module.exports = { setupSupplierModels };
