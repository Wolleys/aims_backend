const { Client } = require("./clientModel");
const { deleteItem } = require("../helpers/deleteItem");
const { checkOrganization } = require("../helpers/checkOrganization");

const deleteOneClient = async (organizationId, clientId) => {
    await checkOrganization(organizationId);

    try {
        const itemToFind = "a client";
        await deleteItem(Client, itemToFind, clientId, organizationId);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { deleteOneClient };
