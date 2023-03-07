const Supplier = require("../../database/Supplier");

const getAllSuppliers = (organizationId) => {
    try {
        const allSuppliers = Supplier.getAllSuppliers(organizationId);
        return allSuppliers;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllSuppliers };
