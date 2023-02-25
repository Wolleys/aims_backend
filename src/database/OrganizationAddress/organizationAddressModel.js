const { getModels } = require("../dbConfig");
const OrganizationAddress = () => getModels().OrganizationAddress;

module.exports = { OrganizationAddress };
