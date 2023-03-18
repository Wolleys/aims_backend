const { Aircraft } = require("./aircraftModel");
const { Client } = require("../Client/clientModel");
const { findItem } = require("../helpers/findItem");
const { checkOrganization } = require("../helpers/checkOrganization");

const updateOneAircraft = async (organizationId, aircraftId, changes) => {
    await checkOrganization(organizationId);

    const findAircraft = "an aircraft";
    await findItem(Aircraft, findAircraft, aircraftId, organizationId);

    const findClient = "a client";
    await findItem(Client, findClient, changes.client_id, organizationId);

    try {
        const updateAircraft = await Aircraft().update(
            { ...changes },
            { where: { id: aircraftId, organization_id: organizationId } }
        );
        if (!updateAircraft) {
            throw {
                status: 400,
                message: `Error while updating an aircraft with the id '${aircraftId}'`,
            };
        }
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneAircraft };
