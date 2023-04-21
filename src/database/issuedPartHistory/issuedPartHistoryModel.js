const { getModels } = require("../dbConfig");
const IssuedPartHistory = () => getModels().IssuedPartHistory;

module.exports = { IssuedPartHistory };
