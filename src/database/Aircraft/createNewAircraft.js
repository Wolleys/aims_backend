const { Aircraft } = require("./aircraftModel");
const { Client } = require("../Client/clientModel");
const { isAlreadyAdded } = require("../helpers/isAlreadyAdded");
const { checkOrganization } = require("../helpers/checkOrganization");

const createNewAircraft = async (organizationId, newAircraft) => {
    await checkOrganization(organizationId);

    const clientExists = await Client().findOne({
        where: { id: newAircraft.client_id, organization_id: organizationId },
        attributes: ["id", "organization_id"],
    });
    if (!clientExists) {
        throw {
            status: 400,
            message: `Can't find a client with the id '${newAircraft.client_id}'`,
        };
    }

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
