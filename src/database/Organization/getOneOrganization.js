const { Organization } = require("./organizationModel");

const getOneOrganization = async (organizationId) => {
    try {
        const organization = await Organization().findByPk(organizationId);
        if (!organization) {
            throw {
                status: 404,
                message: `Can't find an organization with the id '${organizationId}'`,
            };
        }
        return organization;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { getOneOrganization };
