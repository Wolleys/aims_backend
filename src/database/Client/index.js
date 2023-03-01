const { getOneClient } = require("./getOneClient");
const { getAllClients } = require("./getAllClients");
const { createNewClient } = require("./createNewClient");
const { updateOneClient } = require("./updateOneClient");
const { deleteOneClient } = require("./deleteOneClient");

module.exports = {
    getOneClient,
    getAllClients,
    createNewClient,
    updateOneClient,
    deleteOneClient,
};
