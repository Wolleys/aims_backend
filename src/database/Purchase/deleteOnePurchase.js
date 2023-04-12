const { sequelize } = require("../dbConfig");
const { Purchase } = require("./purchaseModel");
const { findItem } = require("../helpers/findItem");
const { PartQuantity } = require("../PartQuantity/partQuantityModel");
const { checkOrganization } = require("../helpers/checkOrganization");
const { PurchaseHistory } = require("../PurchaseHistory/purchaseHistoryModel");

const deleteOnePurchase = async (organizationId, purchaseId) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        await checkOrganization(organizationId);

        const itemToFind = "a purchase";
        await findItem(Purchase, itemToFind, purchaseId, organizationId);

        const purchaseHistory = await PurchaseHistory().findOne({
            where: { purchase_id: purchaseId },
            transaction,
        });

        const updatePartQuantity = {
            quantity_received: -purchaseHistory.quantity_received,
            quantity_on_hand: -purchaseHistory.quantity_received,
        };

        await PartQuantity().increment(
            { ...updatePartQuantity },
            { where: { part_id: purchaseHistory.part_id }, transaction }
        );

        await Purchase().destroy({
            where: { id: purchaseId, organization_id: organizationId },
            transaction,
        });

        await PurchaseHistory().destroy({
            where: { purchase_id: purchaseId },
            transaction,
        });

        await transaction.commit();
    } catch (error) {
        if (transaction) {
            transaction.rollback();
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { deleteOnePurchase };
