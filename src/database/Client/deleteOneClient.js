const { Client } = require("./clientModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const deleteOneClient = async (organizationId, clientId) => {
    await checkOrganization(organizationId);

    try {
        const client = await Client().destroy({
            where: { id: clientId, organization_id: organizationId },
            attributes: ["id", "organization_id"],
        });
        if (!client) {
            throw {
                status: 400,
                message: `Can't find a client with the id '${clientId}'`,
            };
        }
        return client;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { deleteOneClient };
