const { Aircraft } = require("./aircraftModel");
const { Client } = require("../Client/clientModel");
const { findItem } = require("../helpers/findItem");
const { isAlreadyAdded } = require("../helpers/isAlreadyAdded");
const { checkOrganization } = require("../helpers/checkOrganization");

const createNewAircraft = async (organizationId, newAircraft) => {
    await checkOrganization(organizationId);

    const findClient = "a client";
    await findItem(Client, findClient, newAircraft.client_id, organizationId);

    // Check if A/c reg num already exists
    const airRegCol = "aircraft_reg";
    const airRegVal = newAircraft.aircraft_reg;
    const airRegAttrs = ["aircraft_reg", "organization_id"];
    await isAlreadyAdded(Aircraft, airRegCol, airRegVal, organizationId, airRegAttrs);

    try {
        const createdAircraft = await Aircraft().create(newAircraft);
        return createdAircraft;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { createNewAircraft };
