const { getModels } = require("../dbConfig");
const Part = () => getModels().Part;

module.exports = { Part };
