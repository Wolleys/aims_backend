const { sequelize } = require("../dbConfig");
const { Purchase } = require("./purchaseModel");
const { findItem } = require("../helpers/findItem");
const { PartQuantity } = require("../PartQuantity/partQuantityModel");
const { checkOrganization } = require("../helpers/checkOrganization");
const { PurchaseHistory } = require("../PurchaseHistory/purchaseHistoryModel");

const updateOnePurchase = async (organizationId, purchaseId, changes) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        await checkOrganization(organizationId);

        const findPart = "a purchase";
        await findItem(Purchase, findPart, purchaseId, organizationId);

        const updatePurchase = await Purchase().update(
            { ...changes },
            {
                where: { id: purchaseId, organization_id: organizationId },
                transaction,
            }
        );
        if (!updatePurchase) {
            throw {
                status: 400,
                message: `Error while updating purchase with the id '${purchaseId}'`,
            };
        }

        const purchaseHistory = await PurchaseHistory().findOne({
            where: { purchase_id: purchaseId },
            transaction,
        });

        const partId = purchaseHistory.part_id;
        const historyQtyRcvd = purchaseHistory.quantity_received;
        const historyQtyOnHand = purchaseHistory.quantity_received;

        const updatePartQuantity = {
            quantity_received: sequelize.literal(
                `(quantity_received - ${historyQtyRcvd}) + ${changes.quantity_received}`
            ),
            quantity_on_hand: sequelize.literal(
                `(quantity_on_hand - ${historyQtyOnHand}) + ${changes.quantity_received}`
            ),
        };

        await PartQuantity().update(
            { ...updatePartQuantity },
            { where: { part_id: partId }, transaction }
        );
        await PurchaseHistory().update(
            { ...changes },
            { where: { purchase_id: purchaseId, part_id: partId }, transaction }
        );

        await transaction.commit();
    } catch (error) {
        if (transaction) {
            transaction.rollback();
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOnePurchase };
