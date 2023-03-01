const clientService = require("../../services/clientService");

const updateOneClient = async (req, res) => {
    const updatedClient = clientService.updateOneClient();
    res.send("Update an existing client");
};

module.exports = { updateOneClient };
