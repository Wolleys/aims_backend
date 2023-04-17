const { getModels } = require("../dbConfig");
const Job = () => getModels().Job;

module.exports = { Job };
