const Supplier = require("../../database/Supplier");

const getAllSuppliers = (organizationId) => {
    try {
        const allOrganizations = Supplier.getAllSuppliers(organizationId);
        return allOrganizations;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllSuppliers };
