const { OrganizationAddress } = require("./organizationAddressModel");

const updateOneAddress = async (organizationId, changes) => {
    try {
        const confirmIdParam = await OrganizationAddress().findOne({
            where: { organization_id: organizationId },
            attributes: ["organization_id"],
        });
        if (!confirmIdParam) {
            throw {
                status: 404,
                message: `Can't find an organization address with the id '${organizationId}'`,
            };
        }

        const addressToUpdate = await OrganizationAddress().update(
            { ...changes },
            { where: { organization_id: organizationId } }
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
