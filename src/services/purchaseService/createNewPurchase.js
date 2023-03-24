const Purchase = require("../../database/Purchase");

const createNewPurchase = (organizationId, partId, newPurchase) => {
    const purchaseToInsert = {
        ...newPurchase,
        part_id: partId,
        organization_id: organizationId,
        supplier_id: newPurchase.supplier_id,
    };

    try {
        const createdPurchase = Purchase.createNewPurchase(
            organizationId,
            partId,
            purchaseToInsert
        );
        return createdPurchase;
    } catch (error) {
        throw error;
    }
};

module.exports = { createNewPurchase };
