const { Client } = require("./clientModel");
const { findItem } = require("../helpers/findItem");
const { checkOrganization } = require("../helpers/checkOrganization");

const updateOneClient = async (organizationId, clientId, changes) => {
    await checkOrganization(organizationId);

    const findClient = "a client";
    await findItem(Client, findClient, clientId, organizationId);

    try {
        const updateClient = await Client().update(
            { ...changes },
            { where: { id: clientId, organization_id: organizationId } }
        );
        if (!updateClient) {
            throw {
                status: 400,
                message: `Error while updating client with the id '${clientId}'`,
            };
        }
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneClient };
