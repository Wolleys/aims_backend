const { Part } = require("./partModel");
const { sequelize } = require("../dbConfig");
const { PartPrice } = require("../PartPrice/partPriceModel");
const { checkOrganization } = require("../helpers/checkOrganization");
const { PartQuantity } = require("../PartQuantity/partQuantityModel");

const updateOnePart = async (organizationId, partId, changes) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        await checkOrganization(organizationId);

        const partExist = await Part().findOne({
            where: { id: partId, organization_id: organizationId },
            attributes: ["id", "organization_id"],
        });
        if (!partExist) {
            throw {
                status: 400,
                message: `Can't find a part with the id '${partId}'`,
            };
        }

        const updatePart = await Part().update(
            { ...changes },
            { where: { id: partId, organization_id: organizationId }, transaction }
        );
        if (!updatePart) {
            throw {
                status: 400,
                message: `Error while updating part with the id '${partId}'`,
            };
        }

        await PartPrice().update(
            { ...changes },
            { where: { part_id: partId }, transaction }
        );
        await PartQuantity().update(
            { ...changes },
            { where: { part_id: partId }, transaction }
        );

        await transaction.commit();
    } catch (error) {
        if (transaction) {
            transaction.rollback();
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOnePart };
