const { sequelize } = require("../dbConfig");
const { Part } = require("../Part/partModel");
const { Purchase } = require("./purchaseModel");
const { findItem } = require("../helpers/findItem");
const { Supplier } = require("../Supplier/supplierModel");
const { PartQuantity } = require("../PartQuantity/partQuantityModel");
const { checkOrganization } = require("../helpers/checkOrganization");
const { PurchaseHistory } = require("../PurchaseHistory/purchaseHistoryModel");

const createNewPurchase = async (organizationId, partId, newPurchase) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        await checkOrganization(organizationId);

        const findPart = "a part";
        await findItem(Part, findPart, partId, organizationId);

        const findSupplier = "a supplier";
        await findItem(
            Supplier,
            findSupplier,
            newPurchase.supplier_id,
            organizationId
        );

        const createdPurchase = await Purchase().create(newPurchase, {
            transaction,
        });

        const purchaseHistory = {
            ...newPurchase,
            purchase_id: createdPurchase.id,
            part_id: createdPurchase.part_id,
        };

        const updatePartQuantity = {
            quantity_received: createdPurchase.quantity_received,
            quantity_on_hand: createdPurchase.quantity_received,
        };

        await PurchaseHistory().create(purchaseHistory, { transaction });
        await PartQuantity().increment(
            { ...updatePartQuantity },
            { where: { part_id: partId }, transaction }
        );

        await transaction.commit();

        return createdPurchase;
    } catch (error) {
        if (transaction) {
            transaction.rollback();
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { createNewPurchase };
