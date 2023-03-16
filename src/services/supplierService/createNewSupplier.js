const Supplier = require("../../database/Supplier");

const createNewSupplier = (newSupplier, organizationId) => {
    const supplierToInsert = {
        ...newSupplier,
        organization_id: organizationId,
    };

    try {
        const createdSupplier = Supplier.createNewSupplier(
            supplierToInsert,
            organizationId
        );
        return createdSupplier;
    } catch (error) {
        throw error;
    }
};

module.exports = { createNewSupplier };
