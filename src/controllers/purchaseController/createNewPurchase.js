const partPurchase = require("../../services/purchaseService");

const createNewPurchase = async (req, res) => {
    const body = req.body;
    const partId = req.params.partId;
    const organizationId = req.params.organizationId;

    try {
        const createdPurchase = await partPurchase.createNewPurchase(
            organizationId,
            partId,
            body
        );
        res.status(201).send({ status: "OK", data: createdPurchase });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { createNewPurchase };
