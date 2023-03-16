const { setupUnitModels } = require("./unitModel/setupModels");
const { setupUserModels } = require("./userModel/setupModels");
const { setupClientModels } = require("./clientModel/setupModels");
const { setupEngineerModels } = require("./engineerModel/setupModels");
const { setupAircraftModels } = require("./aircraftModel/setupModels");
const { setupSupplierModels } = require("./supplierModel/setupModels");
const { setupOrganizationModels } = require("./organizationModel/setupModels");

function modelsAssociations(sequelize) {
    try {
        // const unitModel = setupUnitModels(sequelize);
        // const userModels = setupUserModels(sequelize);
        const clientModels = setupClientModels(sequelize);
        // const aircraftModel = setupAircraftModels(sequelize);
        // const engineerModels = setupEngineerModels(sequelize);
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

        // // 3. Client has many aircrafts (hasMany) 1:n
        // clientModels.Client.hasMany(aircraftModel.Aircraft, {
        //     onDelete: "CASCADE",
        // });
        // aircraftModel.Aircraft.belongsTo(organizationModels.Organization);

        // // 4. Organization has many units (hasMany) 1:n
        // organizationModels.Organization.hasMany(unitModel.Unit, {
        //     onDelete: "CASCADE",
        // });
        // unitModel.Unit.belongsTo(organizationModels.Organization);

        // // 5. Organization has many users (hasMany) 1:n
        // organizationModels.Organization.hasMany(userModels.User, {
        //     onDelete: "CASCADE",
        // });
        // userModels.User.belongsTo(organizationModels.Organization);

        // // 6. Organization has many engineers (hasMany) 1:n
        // organizationModels.Organization.hasMany(engineerModels.Engineer, {
        //     onDelete: "CASCADE",
        // });
        // engineerModels.Engineer.belongsTo(organizationModels.Organization);

        return {
            // ...unitModel,
            // ...userModels,
            ...clientModels,
            // ...aircraftModel,
            // ...engineerModels,
            ...supplierModels,
            ...organizationModels,
        };
    } catch (err) {
        throw err;
    }
}

module.exports = { modelsAssociations };
