const partPurchase = require("../../services/purchaseService");

const deleteOnePurchase = async (req, res) => {
    const purchase = partPurchase.deleteOnePurchase();
    res.send("Delete an existing purchase");
};

module.exports = { deleteOnePurchase };
