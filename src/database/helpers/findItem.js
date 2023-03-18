const findItem = async (model, item, itemId, organizationId) => {
    const itemToFind = await model().findOne({
        where: { id: itemId, organization_id: organizationId },
        attributes: ["id", "organization_id"],
    });

    if (!itemToFind) {
        throw {
            status: 400,
            message: `Can't find ${item} with the id '${itemId}'`,
        };
    }
};

module.exports = { findItem };
