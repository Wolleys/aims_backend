const Purchase = require("../../database/Purchase");

const getOnePurchase = (organizationId, purchaseId) => {
    try {
        const purchase = Purchase.getOnePurchase(organizationId, purchaseId);
        return purchase;
    } catch (error) {
        throw error;
    }
};

module.exports = { getOnePurchase };
