const clientService = require("../../services/clientService");

const createNewClient = async (req, res) => {
    const createdClient = clientService.createNewClient();
    res.send("Create a new client");
};

module.exports = { createNewClient };
