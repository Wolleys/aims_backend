const { getModels } = require("../dbConfig");
const PartQuantity = () => getModels().PartQuantity;

module.exports = { PartQuantity };
