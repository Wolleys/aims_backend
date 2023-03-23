const { getModels } = require("../dbConfig");
const PurchaseHistory = () => getModels().PurchaseHistory;

module.exports = { PurchaseHistory };
