const Organization = require("../../database/Organization");

const getOneOrganization = (model, organizationId) => {
    try {
        const organization = Organization.getOneOrganization(model, organizationId);
        return organization;
    } catch (error) {
        throw error;
    }
};

module.exports = { getOneOrganization };
