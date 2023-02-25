const Organization = require("../../database/Organization");

const getAllOrganizations = () => {
    try {
        const allOrganizations = Organization.getAllOrganizations();
        return allOrganizations;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllOrganizations };
