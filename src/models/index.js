const { setupClientModels } = require("./clientModel/setupModels");
const { setupAircraftModels } = require("./aircraftModel/setupModels");
const { setupSupplierModels } = require("./supplierModel/setupModels");
const { setupOrganizationModels } = require("./organizationModel/setupModels");

function setupModels(sequelize) {
    try {
        const clientModels = setupClientModels(sequelize);
        const aircraftModel = setupAircraftModels(sequelize);
        const supplierModels = setupSupplierModels(sequelize);
        const organizationModels = setupOrganizationModels(sequelize);

        // *** Organization and Supplier 1:n association ***
        // 1. Organization has many Suppliers (hasMany) 1:n
        organizationModels.Organization.hasMany(supplierModels.Supplier, { onDelete: "CASCADE" });
        supplierModels.Supplier.belongsTo(organizationModels.Organization);

        // 2. Organization has many clients (hasMany) 1:n
        organizationModels.Organization.hasMany(clientModels.Client, { onDelete: "CASCADE" });
        clientModels.Client.belongsTo(organizationModels.Organization)

        // 3. Client has many aircrafts (hasMany) 1:n
        clientModels.Client.hasMany(aircraftModel.Aircraft, { onDelete: "CASCADE" });
        aircraftModel.Aircraft.belongsTo(organizationModels.Organization)

        return {
            ...clientModels,
            ...aircraftModel,
            ...supplierModels,
            ...organizationModels,
        };
    } catch (err) {
        throw err;
    }
}

module.exports = { setupModels };