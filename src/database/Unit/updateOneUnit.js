const { Unit } = require("./unitModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const updateOneUnit = async (organizationId, unitId, changes) => {
    await checkOrganization(organizationId);

    const unitExists = await Unit().findOne({
        where: { id: unitId, organization_id: organizationId },
        attributes: ["id", "organization_id"],
    });
    if (!unitExists) {
        throw {
            status: 400,
            message: `Can't find a unit with the id '${unitId}'`,
        };
    }

    try {
        const updateUnit = await Unit().update(
            { ...changes },
            { where: { id: unitId, organization_id: organizationId } }
        );
        if (!updateUnit) {
            throw {
                status: 400,
                message: `Error while updating a unit with the id '${unitId}'`,
            };
        }

        const returnUpdatedUnit = await Unit().findOne({
            where: { id: unitId, organization_id: organizationId },
            attributes: ["id", "unit_name"],
        });
        return returnUpdatedUnit;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneUnit };
