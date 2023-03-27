const partPurchase = require("../../services/purchaseService");

const getOnePurchase = async (req, res) => {
    const organizationId = req.params.organizationId;
    const purchaseId = req.params.purchaseId;
    try {
        const purchase = await partPurchase.getOnePurchase(
            organizationId,
            purchaseId
        );
        res.send({ status: "OK", data: purchase });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getOnePurchase };
