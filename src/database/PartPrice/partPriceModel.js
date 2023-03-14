const { getModels } = require("../dbConfig");
const PartPrice = () => getModels().PartPrice;

module.exports = { PartPrice };
