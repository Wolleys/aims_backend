const { jobAssociations } = require("./jobModel/associations");
const { partAssociations } = require("./partModel/associations");
const { unitAssociations } = require("./unitModel/associations");
const { userAssociations } = require("./userModel/associations");
const { clientAssociations } = require("./clientModel/associations");
const { engineerAssociations } = require("./engineerModel/associations");
const { aircraftAssociations } = require("./aircraftModel/associations");
const { purchaseAssociations } = require("./purchaseModel/associations");
const { supplierAssociations } = require("./supplierModel/associations");
const { hangarUseAssociations } = require("./hangarUseModel/associations");
const { issuedPartAssociations } = require("./issuedPartModel/associations");
const { organizationAssociations } = require("./organizationModel/associations");
const { purchaseHistoryAssociations } = require("./purchaseHistoryModel/associations");
const { issuedPartHistoryAssociations } = require("./issuedPartHistoryModel/associations");

function setupModels(sequelize) {
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
        const HangarUse = hangarUseAssociations(sequelize);
        const IssuedPart = issuedPartAssociations(sequelize);
        const Organization = organizationAssociations(sequelize);
        const PurchaseHistory = purchaseHistoryAssociations(sequelize);
        const IssuedPartHistory = issuedPartHistoryAssociations(sequelize);

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
            ...HangarUse,
            ...IssuedPart,
            ...Organization,
            ...PurchaseHistory,
            ...IssuedPartHistory,
        };
    } catch (err) {
        throw err;
    }
}

module.exports = { setupModels };
