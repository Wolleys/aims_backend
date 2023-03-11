const { getModels } = require("../dbConfig");
const Engineer = () => getModels().Engineer;

module.exports = { Engineer };
