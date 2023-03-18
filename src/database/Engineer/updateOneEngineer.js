const { Engineer } = require("./engineerModel");
const { findItem } = require("../helpers/findItem");
const { checkOrganization } = require("../helpers/checkOrganization");

const updateOneEngineer = async (organizationId, engineerId, changes) => {
    await checkOrganization(organizationId);

    const findEngineer = "an engineer";
    await findItem(Engineer, findEngineer, engineerId, organizationId);

    try {
        const updateEngineer = await Engineer().update(
            { ...changes },
            { where: { id: engineerId, organization_id: organizationId } }
        );
        if (!updateEngineer) {
            throw {
                status: 400,
                message: `Error while updating an engineer with the id '${engineerId}'`,
            };
        }
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneEngineer };
