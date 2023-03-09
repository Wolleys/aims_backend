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
        
        const returnUpdatedOrganization = await Organization().findOne({
            where: { id: organizationId },
            attributes: [
                "id",
                "first_name",
                "last_name",
                "organization_name",
                "phone_number",
                "website",
                "email",
            ],
        });
        return returnUpdatedOrganization;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneOrganization };
