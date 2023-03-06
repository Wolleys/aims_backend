const supplierAddress = require("../../services/supplierAddress");

const updateOneAddress = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    const supplierId = req.params.supplierId;
    try {
        const updatedSupplier = await supplierAddress.updateOneAddress(
            organizationId,
            supplierId,
            body
        );
        res.send({ status: "OK", data: updatedSupplier });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { updateOneAddress };
