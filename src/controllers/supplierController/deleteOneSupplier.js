const supplierService = require("../../services/supplierService");

const deleteOneSupplier = async (req, res) => {
    const deletedSupplier = supplierService.deleteOneSupplier();
    res.send("Delete an existing supplier");
};

module.exports = { deleteOneSupplier };
