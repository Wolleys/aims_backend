const partPurchase = require("../../services/purchaseService");

const getAllPurchases = async (req, res) => {
    const allPurchases = partPurchase.getAllPurchases();
    res.send("Get all purchases");
};

module.exports = { getAllPurchases };
