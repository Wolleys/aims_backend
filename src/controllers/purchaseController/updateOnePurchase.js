const partPurchase = require("../../services/purchaseService");

const updateOnePurchase = async (req, res) => {
    const purchase = partPurchase.updateOnePurchase();
    res.send("Update an existing purchase");
};

module.exports = { updateOnePurchase };
