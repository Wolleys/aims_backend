const { checkOrganization } = require("../helpers/checkOrganization");

const updateOneOrganization = async (organizationId, changes) => {
    await checkOrganization(organizationId);

    try {
        const updateOrganization = await Organization().update(
            { ...changes },
            { where: { id: organizationId } }
        );
        if (!updateOrganization) {
            throw {
                status: 400,
                message: `Error while updating organization with the id '${organizationId}'`,
            };
        }
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneOrganization };
