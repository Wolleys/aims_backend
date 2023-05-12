const { checkOrganization } = require("../helpers/checkOrganization");

const updateOneOrganization = async (model, organizationId, changes) => {
    await checkOrganization(model, organizationId);

    try {
        await model.Organization.update(
            { ...changes },
            { where: { id: organizationId } }
        );
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneOrganization };
