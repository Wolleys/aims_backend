const Client = require("../../database/Client");

const updateOneClient = (organizationId, clientId, changes) => {
    try {
        const client = Client.updateOneClient(organizationId, clientId, changes);
        return client;
    } catch (error) {
        throw error;
    }
};

module.exports = { updateOneClient };
