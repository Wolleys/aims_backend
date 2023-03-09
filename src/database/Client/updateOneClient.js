const { Client } = require("./clientModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const updateOneClient = async(organizationId, clientId, changes) => {
    await checkOrganization(organizationId);

    const clientExists = await Client().findOne({
        where: { id: clientId, organizationId },
    });
    if (!clientExists) {
        throw {
            status: 400,
            message: `Can't find a client with the id '${clientId}'`,
        };
    }

    try {
        const updateClient = await Client().update(
            { ...changes },
            { where: { id: clientId, organizationId } }
        );
        if (!updateClient) {
            throw {
                status: 400,
                message: `Error while updating client with the id '${clientId}'`,
            };
        }

        const returnUpdatedClient = await Client().findOne({
            where: { id: clientId, organizationId },
            attributes: [
                "id",
                "first_name",
                "last_name",
                "company_name",
                "job_title",
                "phone_number",
                "website",
                "email",
            ],
        });
        return returnUpdatedClient;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneClient };
