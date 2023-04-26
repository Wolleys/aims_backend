const { sequelize } = require("../dbConfig");
const { IssuedPart } = require("./issuedPartModel");
const { findItem } = require("../helpers/findItem");
const { PartQuantity } = require("../PartQuantity/partQuantityModel");
const { checkOrganization } = require("../helpers/checkOrganization");
const {
    IssuedPartHistory,
} = require("../issuedPartHistory/issuedPartHistoryModel");

const deleteOneIssuedPart = async (organizationId, issuedPartId) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        await checkOrganization(organizationId);

        const findPart = "an issued part";
        await findItem(IssuedPart, findPart, issuedPartId, organizationId);

        const issuedPartHistory = await IssuedPartHistory().findOne({
            where: { issued_part_id: issuedPartId },
            transaction,
        });

        const updatePartQuantity = {
            quantity_issued: -issuedPartHistory.quantity_issued,
            quantity_on_hand: -issuedPartHistory.quantity_issued,
        };

        await PartQuantity().increment(
            { ...updatePartQuantity },
            { where: { part_id: issuedPartHistory.part_id }, transaction }
        );

        await IssuedPart().destroy({
            where: { id: issuedPartId, organization_id: organizationId },
            transaction,
        });

        await IssuedPartHistory().destroy({
            where: { issued_part_id: issuedPartId },
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

module.exports = { deleteOneIssuedPart };
