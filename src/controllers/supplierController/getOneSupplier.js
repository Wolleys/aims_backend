const supplierService = require("../../services/supplierService");

const getOneSupplier = async (req, res) => {
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
        const supplier = await supplierService.getOneSupplier(organizationId, supplierId);
        res.send({ status: "OK", data: supplier });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getOneSupplier };
