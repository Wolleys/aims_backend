const Organization = require("../../database/Organization");

const updateOneOrganization = (organizationId, changes) => {
    try {
        const updatedOrganization = Organization.updateOneOrganization(
            organizationId,
            changes
        );
        return updatedOrganization;
    } catch (error) {
        throw error;
    }
};

module.exports = { updateOneOrganization };
