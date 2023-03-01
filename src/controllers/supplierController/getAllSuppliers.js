const supplierService = require("../../services/supplierService");

const getAllSuppliers = async (req, res) => {
    const allSuppliers = supplierService.getAllSuppliers();
    res.send("Get all suppliers");
};

module.exports = { getAllSuppliers };
