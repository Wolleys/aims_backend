const { Unit } = require("./unitModel");
const { findItem } = require("../helpers/findItem");
const { checkOrganization } = require("../helpers/checkOrganization");

const updateOneUnit = async (organizationId, unitId, changes) => {
    await checkOrganization(organizationId);

    const findUnit = "a unit";
    await findItem(Unit, findUnit, unitId, organizationId);

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
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneUnit };
