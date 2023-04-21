const { getModels } = require("../dbConfig");
const IssuedPart = () => getModels().IssuedPart;

module.exports = { IssuedPart };
