const deleteOneOrganization = async (model, organizationId) => {
    try {
        const organization = await model.Organization.destroy({
            where: { id: organizationId },
            attributes: ["id"],
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
