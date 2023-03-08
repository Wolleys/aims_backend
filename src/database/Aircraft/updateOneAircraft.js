const { Aircraft } = require("./aircraftModel");
const { Client } = require("../Client/clientModel");
const { Organization } = require("../Organization/organizationModel");

const updateOneAircraft = async(organizationId, aircraftId, changes) => {
    const organizationExixts = await Organization().findOne({
        where: { id: organizationId },
    });
    if (!organizationExixts) {
        throw {
            status: 404,
            message: `Can't find an organization with the id '${organizationId}'`,
        };
    }

    const aircraftExists = await Aircraft().findOne({
        where: { id: aircraftId, organizationId },
    });
    if (!aircraftExists) {
        throw {
            status: 400,
            message: `Can't find an aircraft with the id '${aircraftId}'`,
        };
    }

    const clientExists = await Client().findOne({
        where: { id: changes.client_id, organizationId },
    });
    if (!clientExists) {
        throw {
            status: 400,
            message: `Can't find a client with the id '${changes.client_id}'`,
        };
    }

    try {
        const updateAircraft = await Aircraft().update(
            { ...changes },
            { where: { id: aircraftId, organizationId } }
        );
        if (!updateAircraft) {
            throw {
                status: 400,
                message: `Error while updating an aircraft with the id '${aircraftId}'`,
            };
        }

        const returnUpdatedAircraft = await Aircraft().findOne({
            where: { id: aircraftId, organizationId },
            attributes: ["id", "aircraft_reg", "aircraft_type", "clientId"],
        });
        return returnUpdatedAircraft;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneAircraft };
