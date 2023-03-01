const clientService = require("../../services/clientService");

const deleteOneClient = async (req, res) => {
    const deletedClient = clientService.deleteOneClient();
    res.send("Delete an existing client");
};

module.exports = { deleteOneClient };
