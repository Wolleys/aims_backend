const supplierService = require("../../services/supplierService");

const deleteOneSupplier = async (req, res) => {
    const supplierId = req.params.supplierId;
    const organizationId = req.params.organizationId;
    try {
        const deletedSupplier = await supplierService.deleteOneSupplier(
            organizationId,
            supplierId
        );
        res.status(200).json({ status: "OK", data: deletedSupplier });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { deleteOneSupplier };
