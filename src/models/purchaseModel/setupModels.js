const { createNewPurchase } = require("./index");

function setupPurchaseModels(sequelize) {
    try {
        // Create purchase model
        const Purchase = createNewPurchase(sequelize);

        return { Purchase };
    } catch (error) {
        throw error;
    }
}

module.exports = { setupPurchaseModels };
