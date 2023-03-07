const Client = require("../../database/Client");

const deleteOneClient = (organizationId, clientId) => {
    try {
        const client = Client.deleteOneClient(organizationId, clientId);
        return client;
    } catch (error) {
        throw error;
    }
};

module.exports = { deleteOneClient };
