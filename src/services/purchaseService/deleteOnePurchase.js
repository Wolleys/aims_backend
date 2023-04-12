const Purchase = require("../../database/Purchase");

const deleteOnePurchase = (organizationId, purchaseId) => {
    try {
        const purchase = Purchase.deleteOnePurchase(organizationId, purchaseId);
        return purchase;
    } catch (error) {
        throw error;
    }
};

module.exports = { deleteOnePurchase };
