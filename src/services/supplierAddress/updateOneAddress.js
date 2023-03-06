const SupplierAddress = require("../../database/SupplierAddress");

const updateOneAddress = (organizationId, supplierId, changes) => {
    try {
        const updatedAddress = SupplierAddress.updateOneAddress(
            organizationId,
            supplierId,
            changes
        );
        return updatedAddress;
    } catch (error) {
        throw error;
    }
};

module.exports = { updateOneAddress };
