const { jobAssociations } = require("./jobModel/associations");
const { partAssociations } = require("./partModel/associations");
const { unitAssociations } = require("./unitModel/associations");
const { userAssociations } = require("./userModel/associations");
const { clientAssociations } = require("./clientModel/associations");
const { engineerAssociations } = require("./engineerModel/associations");
const { aircraftAssociations } = require("./aircraftModel/associations");
const { purchaseAssociations } = require("./purchaseModel/associations");
const { supplierAssociations } = require("./supplierModel/associations");
const { issuedPartAssociations } = require("./issuedPartModel/associations");
const { organizationAssociations } = require("./organizationModel/associations");
const { purchaseHistoryAssociations } = require("./purchaseHistoryModel/associations");

function modelsAssociations(sequelize) {
    try {
        const Job = jobAssociations(sequelize);
        const Unit = unitAssociations(sequelize);
        const User = userAssociations(sequelize);
        const Part = partAssociations(sequelize);
        const Client = clientAssociations(sequelize);
        const Aircraft = aircraftAssociations(sequelize);
        const Purchase = purchaseAssociations(sequelize);
        const Engineer = engineerAssociations(sequelize);
        const Supplier = supplierAssociations(sequelize);
        const IssuedPart = issuedPartAssociations(sequelize);
        const Organization = organizationAssociations(sequelize);
        const PurchaseHistory = purchaseHistoryAssociations(sequelize);

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
            ...Job,
            ...Unit,
            ...User,
            ...Part,
            ...Client,
            ...Aircraft,
            ...Purchase,
            ...Engineer,
            ...Supplier,
            ...IssuedPart,
            ...Organization,
            ...PurchaseHistory,
        };
    } catch (err) {
        throw err;
    }
}

module.exports = { modelsAssociations };
