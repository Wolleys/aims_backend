const { getModels } = require("../dbConfig");
const Aircraft = () => getModels().Aircraft;

module.exports = { Aircraft };
