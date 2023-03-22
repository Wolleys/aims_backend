const { getOnePurchase } = require("./getOnePurchase");
const { getAllPurchases } = require("./getAllPurchases");
const { createNewPurchase } = require("./createNewPurchase");
const { updateOnePurchase } = require("./updateOnePurchase");
const { deleteOnePurchase } = require("./deleteOnePurchase");

module.exports = {
    getOnePurchase,
    getAllPurchases,
    createNewPurchase,
    updateOnePurchase,
    deleteOnePurchase,
};
