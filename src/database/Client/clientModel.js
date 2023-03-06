const { getModels } = require("../dbConfig");
const Client = () => getModels().Client;

module.exports = { Client };
