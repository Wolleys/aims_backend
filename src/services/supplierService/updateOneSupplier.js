const Supplier = require("../../database/Supplier");

const updateOneSupplier = (organizationId, supplierId, changes) => {
    try {
        const supplier = Supplier.updateOneSupplier(
            organizationId,
            supplierId,
            changes
        );
        return supplier;
    } catch (error) {
        throw error;
    }
};

module.exports = { updateOneSupplier };
