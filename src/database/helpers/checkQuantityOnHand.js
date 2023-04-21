const checkQuantityOnHand = async (model, partId, quantityIssued) => {
    try {
        const part = await model().findOne({
            where: { part_id: partId },
            attributes: ["part_id", "quantity_on_hand"],
        });

        if (part.quantity_on_hand <= 0) {
            throw {
                status: 400,
                message: "Part is out of stock. Please try again later.",
            };
        }

        if (part.quantity_on_hand < quantityIssued) {
            throw {
                status: 400,
                message: "Insufficient parts in stock for issuing.",
            };
        }
        return true;
    } catch (error) {
        throw error;
    }
};

module.exports = { checkQuantityOnHand };
