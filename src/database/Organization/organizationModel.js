const { getModels } = require("../dbConfig");
const model = () => getModels().Organization;

module.exports = { model };
