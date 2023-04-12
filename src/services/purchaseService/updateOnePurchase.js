const Purchase = require("../../database/Purchase");

const updateOnePurchase = (organizationId, purchaseId, changes) => {
    try {
        const purchase = Purchase.updateOnePurchase(
            organizationId,
            purchaseId,
            changes
        );
        return purchase;
    } catch (error) {
        throw error;
    }
};

module.exports = { updateOnePurchase };
