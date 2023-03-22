const partPurchase = require("../../services/purchaseService");

const createNewPurchase = async (req, res) => {
    const createdPurchase = partPurchase.createNewPurchase();
    res.send("Create a new purchase");
};

module.exports = { createNewPurchase };
