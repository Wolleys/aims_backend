const { Part } = require("./partModel");
const { deleteItem } = require("../helpers/deleteItem");
const { checkOrganization } = require("../helpers/checkOrganization");

const deleteOnePart = async (organizationId, partId) => {
    await checkOrganization(organizationId);

    try {
        const itemToFind = "a part";
        await deleteItem(Part, itemToFind, partId, organizationId);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { deleteOnePart };
