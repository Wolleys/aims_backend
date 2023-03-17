const { setupPartModels } = require("./partModel/setupModels");
const { setupUnitModels } = require("./unitModel/setupModels");
const { setupUserModels } = require("./userModel/setupModels");
const { setupClientModels } = require("./clientModel/setupModels");
const { setupEngineerModels } = require("./engineerModel/setupModels");
const { setupAircraftModels } = require("./aircraftModel/setupModels");
const { setupSupplierModels } = require("./supplierModel/setupModels");
const { setupOrganizationModels } = require("./organizationModel/setupModels");

function modelsAssociations(sequelize) {
    try {
        const unitModel = setupUnitModels(sequelize);
        const userModels = setupUserModels(sequelize);
        const partModels = setupPartModels(sequelize);
        const clientModels = setupClientModels(sequelize);
        const aircraftModel = setupAircraftModels(sequelize);
        const engineerModels = setupEngineerModels(sequelize);
        const supplierModels = setupSupplierModels(sequelize);
        const organizationModels = setupOrganizationModels(sequelize);

        // 1. Organization has many Suppliers (hasMany) 1:n
        organizationModels.Organization.hasMany(supplierModels.Supplier, {
            onDelete: "CASCADE",
            foreignKey: "organization_id",
        });

        // 2. Organization has many clients (hasMany) 1:n
        organizationModels.Organization.hasMany(clientModels.Client, {
            onDelete: "CASCADE",
            foreignKey: "organization_id",
        });

        // 3. Client has many aircrafts (hasMany) 1:n
        clientModels.Client.hasMany(aircraftModel.Aircraft, {
            onDelete: "CASCADE",
            foreignKey: "client_id",
        });

        // 4. Organization has many aircrafts (hasMany) 1:n
        organizationModels.Organization.hasMany(aircraftModel.Aircraft, {
            onDelete: "CASCADE",
            foreignKey: "organization_id",
        });

        // 5. Organization has many units (hasMany) 1:n
        organizationModels.Organization.hasMany(unitModel.Unit, {
            onDelete: "CASCADE",
            foreignKey: "organization_id",
        });

        // 6. Organization has many users (hasMany) 1:n
        organizationModels.Organization.hasMany(userModels.User, {
            onDelete: "CASCADE",
            foreignKey: "organization_id",
        });

        // 7. Organization has many engineers (hasMany) 1:n
        organizationModels.Organization.hasMany(engineerModels.Engineer, {
            onDelete: "CASCADE",
            foreignKey: "organization_id",
        });

        // 8. Organization has many parts (hasMany) 1:n
        organizationModels.Organization.hasMany(partModels.Part, {
            onDelete: "CASCADE",
            foreignKey: "organization_id",
        });

        // 9. Supplier has many parts (hasMany) 1:n
        supplierModels.Supplier.hasMany(partModels.Part, {
            onDelete: "CASCADE",
            foreignKey: "supplier_id",
        });

        return {
            ...unitModel,
            ...userModels,
            ...partModels,
            ...clientModels,
            ...aircraftModel,
            ...engineerModels,
            ...supplierModels,
            ...organizationModels,
        };
    } catch (err) {
        throw err;
    }
}

module.exports = { modelsAssociations };
