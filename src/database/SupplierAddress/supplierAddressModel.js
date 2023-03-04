const { getModels } = require("../dbConfig");
const SupplierAddress = () => getModels().SupplierAddress;

module.exports = { SupplierAddress };