const { sequelize } = require("../dbConfig");
const { Part } = require("../Part/partModel");
const { HangarUse } = require("./hangarUseModel");
const { findItem } = require("../helpers/findItem");
const { Engineer } = require("../Engineer/engineerModel");
const { PartQuantity } = require("../PartQuantity/partQuantityModel");
const { checkOrganization } = require("../helpers/checkOrganization");
const {
    HangarUseHistory,
} = require("../HangarUseHistory/hangarUseHistoryModel");
const { checkQuantityOnHand } = require("../helpers/checkQuantityOnHand");

const createNewIssuedPart = async (organizationId, newIssuedPart) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        await checkOrganization(organizationId);

        const findPart = "a part";
        await findItem(Part, findPart, newIssuedPart.part_id, organizationId);

        await checkQuantityOnHand(
            PartQuantity,
            newIssuedPart.part_id,
            newIssuedPart.quantity_issued
        );

        const findEngineer = "an engineer";
        await findItem(
            Engineer,
            findEngineer,
            newIssuedPart.engineer_id,
            organizationId
        );

        const createdIssuedPart = await HangarUse().create(newIssuedPart, {
            transaction,
        });

        const hangarUseHistory = {
            ...newIssuedPart,
            issued_part_id: createdIssuedPart.id,
            part_id: createdIssuedPart.part_id,
        };

        const updatePartQuantity = {
            quantity_issued: +newIssuedPart.quantity_issued,
            quantity_on_hand: -newIssuedPart.quantity_issued,
        };

        await HangarUseHistory().create(hangarUseHistory, { transaction });
        await PartQuantity().increment(
            { ...updatePartQuantity },
            { where: { part_id: createdIssuedPart.part_id }, transaction }
        );

        await transaction.commit();

        return createdIssuedPart;
    } catch (error) {
        if (transaction) {
            transaction.rollback();
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { createNewIssuedPart };
