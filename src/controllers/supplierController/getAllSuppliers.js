const supplierService = require("../../services/supplierService");

const getAllSuppliers = async (req, res) => {
    const organizationId = req.params.organizationId;
    try {
        const allSuppliers = await supplierService.getAllSuppliers(organizationId);
        res.send({ status: "OK", data: allSuppliers });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getAllSuppliers };
