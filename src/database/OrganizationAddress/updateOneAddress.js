const updateOneAddress = async (model, organizationId, changes) => {
    try {
        const confirmIdParam = await model.OrganizationAddress.findOne({
            where: { organization_id: organizationId },
            attributes: ["organization_id"],
        });
        if (!confirmIdParam) {
            throw {
                status: 404,
                message: `Can't find an organization address with the id '${organizationId}'`,
            };
        }

        await model.OrganizationAddress.update(
            { ...changes },
            { where: { organization_id: organizationId } }
        );
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneAddress };
