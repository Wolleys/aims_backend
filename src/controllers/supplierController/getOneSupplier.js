const supplierService = require("../../services/supplierService");

const getOneSupplier = async (req, res) => {
    const supplier = supplierService.getOneSupplier();
    res.send("Get an existing supplier");
};

module.exports = { getOneSupplier };
