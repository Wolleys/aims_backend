const purchaseService = require("../../services/purchaseService");

const getAllPurchases = async (req, res) => {
    const organizationId = req.params.organizationId;
    try {
        const allpurchases = await purchaseService.getAllPurchases(organizationId);
        res.send({ status: "OK", data: allpurchases });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getAllPurchases };
