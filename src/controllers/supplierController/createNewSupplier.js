const supplierService = require("../../services/supplierService");

const createNewSupplier = async (req, res) => {
    const createdSupplier = supplierService.createNewSupplier();
    res.send("Create a new supplier");
};

module.exports = { createNewSupplier };
