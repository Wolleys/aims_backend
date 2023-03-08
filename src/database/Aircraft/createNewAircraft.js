const { Aircraft } = require("./aircraftModel");
const { Client } = require("../Client/clientModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const createNewAircraft = async (organizationId, newAircraft) => {
    await checkOrganization(organizationId);

    const clientExists = await Client().findOne({
        where: { id: newAircraft.client_id, organizationId },
    });
    if (!clientExists) {
        throw {
            status: 400,
            message: `Can't find a client with the id '${newAircraft.client_id}'`,
        };
    }

    const isAlreadyAdded = await Aircraft().findOne({
        where: { aircraft_reg: newAircraft.aircraft_reg, organizationId },
    });
    if (isAlreadyAdded) {
        throw {
            status: 400,
            message: `'${newAircraft.aircraft_reg}' has already been added!`,
        };
    }

    try {
        const createdAircraft = await Aircraft().create(newAircraft);
        return createdAircraft;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { createNewAircraft };
