const { partModel } = require("../partModel/part");
const { purchaseHistoryModel } = require("./purchaseHistory");
const { purchaseModel } = require("../purchaseModel/purchase");

function purchaseHistoryAssociations(sequelize) {
    try {
        // Initialize models
        const Part = partModel(sequelize);
        const Purchase = purchaseModel(sequelize);
        const PurchaseHistory = purchaseHistoryModel(sequelize);

        // 1. Purcahse belongs to many Parts n:m
        Purchase.belongsToMany(Part, {
            through: PurchaseHistory,
            foreignKey: "purchase_id",
        });
        Part.belongsToMany(Purchase, {
            through: PurchaseHistory,
            foreignKey: "part_id",
        });

        return { PurchaseHistory };
    } catch (error) {
        throw error;
    }
}

module.exports = { purchaseHistoryAssociations };
