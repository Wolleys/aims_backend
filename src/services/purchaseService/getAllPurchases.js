const Purchase = require("../../database/Purchase");

const getAllPurchases = (organizationId) => {
    try {
        const allPurchases = Purchase.getAllPurchases(organizationId);
        return allPurchases;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllPurchases };
