const { sequelize } = require("../dbConfig");
const { IssuedPart } = require("./issuedPartModel");
const { findItem } = require("../helpers/findItem");
const { PartQuantity } = require("../PartQuantity/partQuantityModel");
const { checkOrganization } = require("../helpers/checkOrganization");
const {
    IssuedPartHistory,
} = require("../IssuedPartHistory/issuedPartHistoryModel");

const updateOneIssuedPart = async (organizationId, issuedPartId, changes) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        await checkOrganization(organizationId);

        const findPart = "an issued part";
        await findItem(IssuedPart, findPart, issuedPartId, organizationId);

        await IssuedPart().update(
            { ...changes },
            {
                where: { id: issuedPartId, organization_id: organizationId },
                transaction,
            }
        );

        const issuedPartHistory = await IssuedPartHistory().findOne({
            where: { issued_part_id: issuedPartId },
            transaction,
        });

        const partId = issuedPartHistory.part_id;
        const historyQtyIssued = issuedPartHistory.quantity_issued;
        const historyQtyOnHand = issuedPartHistory.quantity_issued;

        const updatePartQuantity = {
            quantity_issued: sequelize.literal(
                `(quantity_issued - ${historyQtyIssued}) + ${changes.quantity_issued}`
            ),
            quantity_on_hand: sequelize.literal(
                `(quantity_on_hand + ${historyQtyOnHand}) - ${changes.quantity_issued}`
            ),
        };

        await PartQuantity().update(
            { ...updatePartQuantity },
            { where: { part_id: partId }, transaction }
        );
        await IssuedPartHistory().update(
            { ...changes },
            { where: { issued_part_id: issuedPartId, part_id: partId }, transaction }
        );

        await transaction.commit();
    } catch (error) {
        if (transaction) {
            transaction.rollback();
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneIssuedPart };
