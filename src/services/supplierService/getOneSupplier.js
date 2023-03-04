const Supplier = require("../../database/Supplier");

const getOneSupplier = (organizationId, supplierId) => {
    try {
        const supplier = Supplier.getOneSupplier(organizationId, supplierId);
        return supplier;
    } catch (error) {
        throw error;
    }
};

module.exports = { getOneSupplier };
