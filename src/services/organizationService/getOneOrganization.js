const Organization = require("../../database/Organization");

const getOneOrganization = (organizationId) => {
    try {
        const organization = Organization.getOneOrganization(organizationId);
        return organization;
    } catch (error) {
        throw error;
    }
};

module.exports = { getOneOrganization };
