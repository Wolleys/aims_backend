const { supplierModel } = require("./supplier");
const { supplierAvatarModel } = require("./supplierAvatar");
const { supplierAddressModel } = require("./supplierAddress");
const { organizationModel } = require("../organizationModel/organization");

function supplierAssociations(sequelize) {
    try {
        // Initialize models
        const Supplier = supplierModel(sequelize);
        const Organization = organizationModel(sequelize);
        const SupplierAvatar = supplierAvatarModel(sequelize);
        const SupplierAddress = supplierAddressModel(sequelize);

        // 1. Supplier has one avatar 1:1
        Supplier.hasOne(SupplierAvatar, {
            as: "avatar",
            onDelete: "CASCADE",
            foreignKey: "supplier_id",
        });
        SupplierAvatar.belongsTo(Supplier, {
            foreignKey: "supplier_id",
        });

        // 2. Supplier has one address 1:1
        Supplier.hasOne(SupplierAddress, {
            as: "address",
            onDelete: "CASCADE",
            foreignKey: "supplier_id",
        });
        SupplierAddress.belongsTo(Supplier, {
            foreignKey: "supplier_id",
        });

        // 3. Organization has many Suppliers (hasMany) 1:n
        Organization.hasMany(Supplier, {
            onDelete: "CASCADE",
            foreignKey: "organization_id",
        });
        Supplier.belongsTo(Organization, {
            foreignKey: "organization_id",
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

module.exports = { supplierAssociations };
