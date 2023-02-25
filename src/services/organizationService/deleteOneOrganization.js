const Organization = require("../../database/Organization");

const deleteOneOrganization = (organizationId) => {
    try {
        const organization = Organization.deleteOneOrganization(organizationId);
        return organization;
    } catch (error) {
        throw error;
    }
};

module.exports = { deleteOneOrganization };
