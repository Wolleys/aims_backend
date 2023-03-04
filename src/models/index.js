const { setupSupplierModels } = require("./supplierModel/setupModels");
const { setupOrganizationModels } = require("./organizationModel/setupModels");

function setupModels(sequelize) {
    try {
        const supplierModels = setupSupplierModels(sequelize);
        const organizationModels = setupOrganizationModels(sequelize);

        // *** Organization and Supplier 1:n association ***
        // 1. Organization has many Suppliers (hasMany) 1:n
        organizationModels.Organization.hasMany(supplierModels.Supplier, { onDelete: "CASCADE" });
        supplierModels.Supplier.belongsTo(organizationModels.Organization);

        return {
            ...supplierModels,
            ...organizationModels,
        };
    } catch (err) {
        throw err;
    }
}

module.exports = { setupModels };