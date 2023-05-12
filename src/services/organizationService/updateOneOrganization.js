const Organization = require("../../database/Organization");

const updateOneOrganization = (model, organizationId, changes) => {
    try {
        const updatedOrganization = Organization.updateOneOrganization(
            model,
            organizationId,
            changes
        );
        return updatedOrganization;
    } catch (error) {
        throw error;
    }
};

module.exports = { updateOneOrganization };
