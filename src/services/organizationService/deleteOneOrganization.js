const Organization = require("../../database/Organization");

const deleteOneOrganization = (model, organizationId) => {
    try {
        const organization = Organization.deleteOneOrganization(
            model,
            organizationId
        );
        return organization;
    } catch (error) {
        throw error;
    }
};

module.exports = { deleteOneOrganization };
