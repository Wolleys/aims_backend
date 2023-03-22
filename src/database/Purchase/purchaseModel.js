const { getModels } = require("../dbConfig");
const Purchase = () => getModels().Purchase;

module.exports = { Purchase };
