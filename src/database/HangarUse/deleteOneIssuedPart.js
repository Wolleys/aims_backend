const { sequelize } = require("../dbConfig");
const { HangarUse } = require("./hangarUseModel");
const { findItem } = require("../helpers/findItem");
const { PartQuantity } = require("../PartQuantity/partQuantityModel");
const { checkOrganization } = require("../helpers/checkOrganization");
const {
    HangarUseHistory,
} = require("../HangarUseHistory/hangarUseHistoryModel");

const deleteOneIssuedPart = async (organizationId, issuedPartId) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        await checkOrganization(organizationId);

        const findPart = "an issued part";
        await findItem(HangarUse, findPart, issuedPartId, organizationId);

        const hangarUseHistory = await HangarUseHistory().findOne({
            where: { issued_part_id: issuedPartId },
            transaction,
        });

        const updatePartQuantity = {
            quantity_issued: -hangarUseHistory.quantity_issued,
            quantity_on_hand: +hangarUseHistory.quantity_issued,
        };

        await PartQuantity().increment(
            { ...updatePartQuantity },
            { where: { part_id: hangarUseHistory.part_id }, transaction }
        );

        await HangarUse().destroy({
            where: { id: issuedPartId, organization_id: organizationId },
            transaction,
        });

        await HangarUseHistory().destroy({
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
