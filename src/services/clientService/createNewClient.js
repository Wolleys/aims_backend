const Client = require("../../database/Client");

const createNewClient = (newClient, organizationId) => {
    const clientToInsert = {
        ...newClient,
        organizationId,
    };

    try {
        const createdClient = Client.createNewClient(
            clientToInsert,
            organizationId
        );
        return createdClient;
    } catch (error) {
        throw error;
    }
};

module.exports = { createNewClient };
