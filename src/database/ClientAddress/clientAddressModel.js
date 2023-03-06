const { getModels } = require("../dbConfig");
const ClientAddress = () => getModels().ClientAddress;

module.exports = { ClientAddress };