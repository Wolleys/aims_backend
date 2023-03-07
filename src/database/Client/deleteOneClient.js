const { Client } = require("./clientModel");
const { Organization } = require("../Organization/organizationModel");

const deleteOneClient = async(organizationId, clientId) => {
    const organizationExists = await Organization().findOne({
        where: { id: organizationId },
    });
    if (!organizationExists) {
        throw {
            status: 404,
            message: `Can't find an organization with the id '${organizationId}'`,
        };
    }
    try {
        const client = await Client().destroy({
            where: { id: clientId, organizationId },
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
