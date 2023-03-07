const Client = require("../../database/Client");

const getOneClient = (organizationId, clientId) => {
    try {
        const client = Client.getOneClient(organizationId, clientId);
        return client;
    } catch (error) {
        throw error;
    }
};

module.exports = { getOneClient };
