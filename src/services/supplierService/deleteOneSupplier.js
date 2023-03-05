const Supplier = require("../../database/Supplier");

const deleteOneSupplier = (organizationId, supplierId) => {
    try {
        const supplier = Supplier.deleteOneSupplier(organizationId, supplierId);
        return supplier;
    } catch (error) {
        throw error;
    }
};

module.exports = { deleteOneSupplier };
