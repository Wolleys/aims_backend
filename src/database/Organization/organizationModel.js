const { getModels } = require("../dbConfig");
const Organization = () => getModels().Organization;

module.exports = { Organization };
