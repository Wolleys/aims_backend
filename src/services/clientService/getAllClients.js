const Client = require("../../database/Client");

const getAllClients = (organizationId) => {
    try {
        const allClients = Client.getAllClients(organizationId);
        return allClients;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllClients };
