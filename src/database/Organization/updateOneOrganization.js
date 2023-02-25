const { model } = require("./organizationModel");

const updateOneOrganization = async (organizationId, changes) => {
    try {
        const confirmIdParam = await model().findOne({
            where: { id: organizationId },
        });
        if (!confirmIdParam) {
            throw {
                status: 404,
                message: `Can't find an organization with the id '${organizationId}'`,
            };
        }
        const updateOrganization = await model().update(
            { ...changes },
            { where: { id: organizationId } }
        );
        if (!updateOrganization) {
            throw {
                status: 400,
                message: `Error while updating organization with the id '${organizationId}'`,
            };
        }
        const returnUpdatedOrganization = await model().findOne({
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
