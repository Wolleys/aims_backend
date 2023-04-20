const { partModel } = require("./part");
const { partPriceModel } = require("./partPrice");
const { unitModel } = require("../unitModel/unit");
const { partQuantityModel } = require("./partQuantity");
const { supplierModel } = require("../supplierModel/supplier");
const { organizationModel } = require("../organizationModel/organization");

function partAssociations(sequelize) {
    try {
        // Initialize models
        const Unit = unitModel(sequelize);
        const Part = partModel(sequelize);
        const Supplier = supplierModel(sequelize);
        const PartPrice = partPriceModel(sequelize);
        const Organization = organizationModel(sequelize);
        const PartQuantity = partQuantityModel(sequelize);

        // 1. Part has many Prices 1:n
        Part.hasMany(PartPrice, {
            as: "price",
            onDelete: "CASCADE",
            foreignKey: "part_id",
        });
        PartPrice.belongsTo(Part, {
            foreignKey: "part_id",
        });

        // 2. Part has many Quantity 1:n
        Part.hasMany(PartQuantity, {
            as: "quantity",
            onDelete: "CASCADE",
            foreignKey: "part_id",
        });
        PartQuantity.belongsTo(Part, {
            foreignKey: "part_id",
        });

        // 3. Unit has many Parts 1:n
        Unit.hasMany(Part, {
            onDelete: "CASCADE",
            foreignKey: "unit_id",
        });
        Part.belongsTo(Unit, {
            foreignKey: "unit_id",
        });

        // 4. Supplier has many Parts 1:n
        Supplier.hasMany(Part, {
            onDelete: "CASCADE",
            foreignKey: "supplier_id",
        });
        Part.belongsTo(Supplier, {
            foreignKey: "supplier_id",
        });

        // 5. Organization has many Parts 1:n
        Organization.hasMany(Part, {
            onDelete: "CASCADE",
            foreignKey: "organization_id",
        });
        Part.belongsTo(Organization, {
            foreignKey: "organization_id",
        });

        return { Part, PartPrice, PartQuantity };
    } catch (error) {
        throw error;
    }
}

module.exports = { partAssociations };
