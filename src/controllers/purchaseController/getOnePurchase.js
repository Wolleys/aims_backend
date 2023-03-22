const partPurchase = require("../../services/purchaseService");

const getOnePurchase = async (req, res) => {
    const purchase = partPurchase.getOnePurchase();
    res.send("Get an existing purchase");
};

module.exports = { getOnePurchase };
