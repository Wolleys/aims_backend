// const { setupJobModels } = require("./jobModel/setupModels");
// const { setupPartModels } = require("./partModel/setupModels");
// const { setupUnitModels } = require("./unitModel/setupModels");
// const { setupUserModels } = require("./userModel/setupModels");
const { clientAssociations } = require("./clientModel/associations");
// const { setupEngineerModels } = require("./engineerModel/setupModels");
const { aircraftAssociations } = require("./aircraftModel/associations");
// const { setupPurchaseModels } = require("./purchaseModel/setupModels");
const { supplierAssociations } = require("./supplierModel/associations");
// const { setupIssuedPartModels } = require("./issuedPartModel/setupModels");
const { organizationAssociations } = require("./organizationModel/associations");
// const {
//     setupPurchaseHistoryModels,
// } = require("./purchaseHistoryModel/setupModels");

function modelsAssociations(sequelize) {
    try {
        // const jobModel = setupJobModels(sequelize);
        // const unitModel = setupUnitModels(sequelize);
        // const userModels = setupUserModels(sequelize);
        // const partModels = setupPartModels(sequelize);
        const Client = clientAssociations(sequelize);
        const Aircraft = aircraftAssociations(sequelize);
        // const purchaseModel = setupPurchaseModels(sequelize);
        // const engineerModels = setupEngineerModels(sequelize);
        const Supplier = supplierAssociations(sequelize);
        // const issuedPartModel = setupIssuedPartModels(sequelize);
        const Organization = organizationAssociations(sequelize);
        // const purchaseHistoryModel = setupPurchaseHistoryModels(sequelize);

        // 1. Organization has many Suppliers (hasMany) 1:n
        // organizationModels.Organization.hasMany(supplierModels.Supplier, {
        //     onDelete: "CASCADE",
        //     foreignKey: "organization_id",
        // });

        // // 2. Organization has many clients (hasMany) 1:n
        // organizationModels.Organization.hasMany(clientModels.Client, {
        //     onDelete: "CASCADE",
        //     foreignKey: "organization_id",
        // });

        // // 3. Client has many aircrafts (hasMany) 1:n
        // clientModels.Client.hasMany(aircraftModel.Aircraft, {
        //     onDelete: "CASCADE",
        //     foreignKey: "client_id",
        // });
        // aircraftModel.Aircraft.belongsTo(clientModels.Client, {
        //     foreignKey: "client_id",
        // });

        // // 4. Organization has many aircrafts (hasMany) 1:n
        // organizationModels.Organization.hasMany(aircraftModel.Aircraft, {
        //     onDelete: "CASCADE",
        //     foreignKey: "organization_id",
        // });

        // // 5. Organization has many units (hasMany) 1:n
        // organizationModels.Organization.hasMany(unitModel.Unit, {
        //     onDelete: "CASCADE",
        //     foreignKey: "organization_id",
        // });

        // // 6. Organization has many users (hasMany) 1:n
        // organizationModels.Organization.hasMany(userModels.User, {
        //     onDelete: "CASCADE",
        //     foreignKey: "organization_id",
        // });

        // // 7. Organization has many engineers (hasMany) 1:n
        // organizationModels.Organization.hasMany(engineerModels.Engineer, {
        //     onDelete: "CASCADE",
        //     foreignKey: "organization_id",
        // });

        // // 8. Organization has many parts (hasMany) 1:n
        // organizationModels.Organization.hasMany(partModels.Part, {
        //     onDelete: "CASCADE",
        //     foreignKey: "organization_id",
        // });

        // // 9. Supplier has many parts (hasMany) 1:n
        // supplierModels.Supplier.hasMany(partModels.Part, {
        //     onDelete: "CASCADE",
        //     foreignKey: "supplier_id",
        // });

        // // 10. Supplier has many purchases (hasMany) 1:n
        // supplierModels.Supplier.hasMany(purchaseModel.Purchase, {
        //     onDelete: "CASCADE",
        //     foreignKey: "supplier_id",
        // });

        // // 11. Organization has many purchases (hasMany) 1:n
        // organizationModels.Organization.hasMany(purchaseModel.Purchase, {
        //     onDelete: "CASCADE",
        //     foreignKey: "organization_id",
        // });

        // // 12. Part has many purchases (hasMany) 1:n
        // partModels.Part.hasMany(purchaseModel.Purchase, {
        //     onDelete: "CASCADE",
        //     foreignKey: "part_id",
        // });

        // // 13. Part has many purchase history (hasMany) 1:n
        // partModels.Part.hasMany(purchaseHistoryModel.PurchaseHistory, {
        //     onDelete: "CASCADE",
        //     foreignKey: "part_id",
        // });

        // // 14. Purchase has many purchase history (hasMany) 1:n
        // purchaseModel.Purchase.hasMany(purchaseHistoryModel.PurchaseHistory, {
        //     onDelete: "CASCADE",
        //     foreignKey: "purchase_id",
        // });

        // // 15. Organization has many jobs (hasMany) 1:n
        // organizationModels.Organization.hasMany(jobModel.Job, {
        //     onDelete: "CASCADE",
        //     foreignKey: "organization_id",
        // });

        // // 16. Aircraft has many jobs (hasMany) 1:n
        // aircraftModel.Aircraft.hasMany(jobModel.Job, {
        //     onDelete: "CASCADE",
        //     foreignKey: "aircraft_id",
        // });
        // jobModel.Job.belongsTo(aircraftModel.Aircraft, {
        //     foreignKey: "aircraft_id",
        // });

        // // 17. Organization has many issued parts (hasMany) 1:n
        // organizationModels.Organization.hasMany(issuedPartModel.IssuedPart, {
        //     onDelete: "CASCADE",
        //     foreignKey: "organization_id",
        // });

        return {
            // ...jobModel,
            // ...unitModel,
            // ...userModels,
            // ...partModels,
            ...Client,
            ...Aircraft,
            // ...purchaseModel,
            // ...engineerModels,
            ...Supplier,
            // ...issuedPartModel,
            ...Organization,
            // ...purchaseHistoryModel,
        };
    } catch (err) {
        throw err;
    }
}

module.exports = { modelsAssociations };
