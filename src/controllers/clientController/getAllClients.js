const clientService = require("../../services/clientService");

const getAllClients = async (req, res) => {
    const allClients = clientService.getAllClients();
    res.send("Get all clients");
};

module.exports = { getAllClients };
