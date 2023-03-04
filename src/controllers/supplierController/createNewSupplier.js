const supplierService = require("../../services/supplierService");

const createNewSupplier = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    if (!organizationId) {
        return res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':organizationId' can't be empty" },
        });
    }

    try {
        const createdSupplier = await supplierService.createNewSupplier(
            body,
            organizationId
        );
        res.status(201).send({ status: "OK", data: createdSupplier });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { createNewSupplier };
