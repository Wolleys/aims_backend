const checkOrganization = async (model, id) => {
    const confirmIdParam = await model.Organization.findOne({
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
