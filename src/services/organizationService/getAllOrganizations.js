const Organization = require("../../database/Organization");

const getAllOrganizations = (model) => {
    try {
        const allOrganizations = Organization.getAllOrganizations(model);
        return allOrganizations;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllOrganizations };
