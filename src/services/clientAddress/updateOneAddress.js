const ClientAddress = require("../../database/ClientAddress");

const updateOneAddress = (organizationId, clientId, changes) => {
    try {
        const updatedAddress = ClientAddress.updateOneAddress(
            organizationId,
            clientId,
            changes
        );
        return updatedAddress;
    } catch (error) {
        throw error;
    }
};

module.exports = { updateOneAddress };
