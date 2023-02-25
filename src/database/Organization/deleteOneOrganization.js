const { model } = require("./organizationModel");

const deleteOneOrganization = async (organizationId) => {
    try {
        const organization = await model().destroy({
            where: { id: organizationId },
        });
        if (!organization) {
            throw {
                status: 400,
                message: `Can't find an organization with the id '${organizationId}'`,
            };
        }
        return organization;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { deleteOneOrganization };
