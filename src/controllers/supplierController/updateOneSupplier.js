const supplierService = require("../../services/supplierService");

const updateOneSupplier = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    const supplierId = req.params.supplierId;
    if (!organizationId) {
        return res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':organizationId' can't be empty" },
        });
    }
    if (!supplierId) {
        return res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':supplierId' can't be empty" },
        });
    }

    try {
        const updatedSupplier = await supplierService.updateOneSupplier(
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

module.exports = { updateOneSupplier };
