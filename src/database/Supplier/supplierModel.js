const { getModels } = require("../dbConfig");
const Supplier = () => getModels().Supplier;

module.exports = { Supplier };
