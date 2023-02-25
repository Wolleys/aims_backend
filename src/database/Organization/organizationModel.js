const { getModels } = require("../dbConfig");
const model = () => getModels().Organizations;

module.exports = { model };
