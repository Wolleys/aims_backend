const OrganizationAddress = require("../../database/OrganizationAddress");

const updateOneAddress = (organizationId, changes) => {
    try {
        const updatedAddress = OrganizationAddress.updateOneAddress(
            organizationId,
            changes
        );
        return updatedAddress;
    } catch (error) {
        throw error;
    }
};

module.exports = { updateOneAddress };
