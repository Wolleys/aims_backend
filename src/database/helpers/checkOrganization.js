const { Organization } = require("../Organization/organizationModel");

const checkOrganization = async (id) => {
    const confirmIdParam = await Organization().findOne({
        where: { id: id },
        attributes: ["id"],
    });

    if (!confirmIdParam) {
        throw {
            status: 404,
            message: `Can't find an organization with the id '${id}'`,
        };
    }
};

module.exports = { checkOrganization };
