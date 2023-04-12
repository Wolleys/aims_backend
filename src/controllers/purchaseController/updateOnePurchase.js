const partPurchase = require("../../services/purchaseService");

const updateOnePurchase = async (req, res) => {
    const body = req.body;
    const purchaseId = req.params.purchaseId;
    const organizationId = req.params.organizationId;
    try {
        await partPurchase.updateOnePurchase(organizationId, purchaseId, body);
        res.send({ status: "OK", message: "Record updated successfully." });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { updateOnePurchase };
