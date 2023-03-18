const { OrganizationAddress } = require("./organizationAddressModel");

const updateOneAddress = async (organizationId, changes) => {
    try {
        const confirmIdParam = await OrganizationAddress().findOne({
            where: { organizationId },
            attributes: ["organizationId"],
        });
        if (!confirmIdParam) {
            throw {
                status: 404,
                message: `Can't find an organization address with the id '${organizationId}'`,
            };
        }

        const addressToUpdate = await OrganizationAddress().update(
            { ...changes },
            { where: { organizationId } }
        );
        if (!addressToUpdate) {
            throw {
                status: 400,
                message: `Error while updating organization address with the id '${organizationId}'`,
            };
        }
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneAddress };
