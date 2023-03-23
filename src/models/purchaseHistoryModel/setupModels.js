const { createNewPurchaseHistory } = require("./index");

function setupPurchaseHistoryModels(sequelize) {
    try {
        // Create purchase history model
        const PurchaseHistory = createNewPurchaseHistory(sequelize);

        return { PurchaseHistory };
    } catch (error) {
        throw error;
    }
}

module.exports = { setupPurchaseHistoryModels };
