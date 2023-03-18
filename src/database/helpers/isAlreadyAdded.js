const isAlreadyAdded = async (model, column, value, id, attributes) => {
    const itemToCheck = await model().findOne({
        where: { [column]: value, organization_id: id },
        attributes: attributes,
    });

    if (itemToCheck) {
        throw {
            status: 400,
            message: `'${value}' has already been added.`,
        };
    }
    return itemToCheck;
};

module.exports = { isAlreadyAdded };
