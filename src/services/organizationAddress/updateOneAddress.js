const OrganizationAddress = require("../../database/OrganizationAddress");

const updateOneAddress = (model, organizationId, changes) => {
    try {
        const updatedAddress = OrganizationAddress.updateOneAddress(
            model,
            organizationId,
            changes
        );
        return updatedAddress;
    } catch (error) {
        throw error;
    }
};

module.exports = { updateOneAddress };
