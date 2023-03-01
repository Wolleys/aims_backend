const supplierService = require("../../services/supplierService");

const updateOneSupplier = async (req, res) => {
    const updatedSupplier = supplierService.updateOneSupplier();
    res.send("Update an existing supplier");
};

module.exports = { updateOneSupplier };
