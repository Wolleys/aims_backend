const supplierService = require("../../services/supplierService");

const createNewSupplier = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
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
