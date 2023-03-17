const deleteItem = async (model, item, itemId, organizationId) => {
    const itemToDelete = await model().destroy({
        where: { id: itemId, organization_id: organizationId },
        attributes: ["id", "organization_id"],
    });

    if (!itemToDelete) {
        throw {
            status: 400,
            message: `Can't find ${item} with the id '${itemId}'`,
        };
    }
    return itemToDelete;
};

module.exports = { deleteItem };
