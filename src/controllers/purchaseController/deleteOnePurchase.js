const partPurchase = require("../../services/purchaseService");

const deleteOnePurchase = async (req, res) => {
    const purchaseId = req.params.purchaseId;
    const organizationId = req.params.organizationId;
    try {
        await partPurchase.deleteOnePurchase(organizationId, purchaseId);
        res
            .status(200)
            .json({ status: "OK", message: "Record deleted successfully." });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { deleteOnePurchase };
