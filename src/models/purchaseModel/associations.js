const { purchaseModel } = require("./purchase");
const { partModel } = require("../partModel/part");
const { supplierModel } = require("../supplierModel/supplier");
const { organizationModel } = require("../organizationModel/organization");

function purchaseAssociations(sequelize) {
    try {
        // Initialize models
        const Part = partModel(sequelize);
        const Supplier = supplierModel(sequelize);
        const Purchase = purchaseModel(sequelize);
        const Organization = organizationModel(sequelize);

        // 1. Part belongs to many Suppliers n:m
        Part.belongsToMany(Supplier, { through: Purchase, foreignKey: "part_id" });
        Supplier.belongsToMany(Part, {
            through: Purchase,
            foreignKey: "supplier_id",
        });

        // 2. Organization has many Purchases 1:n
        Organization.hasMany(Purchase, {
            onDelete: "CASCADE",
            foreignKey: "organization_id",
        });
        Purchase.belongsTo(Organization, {
            foreignKey: "organization_id",
        });

        return { Purchase };
    } catch (error) {
        throw error;
    }
}

module.exports = { purchaseAssociations };
