const clientService = require("../../services/clientService");

const getOneClient = async (req, res) => {
    const client = clientService.getOneClient();
    res.send("Get an existing client");
};

module.exports = { getOneClient };
