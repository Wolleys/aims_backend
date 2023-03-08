const { Aircraft } = require("./aircraftModel");
const { Organization } = require("../Organization/organizationModel");

const getOneAircraft = async (organizationId, aircraftId) => {
    const confirmIdParam = await Organization().findOne({
        where: { id: organizationId },
    });
    if (!confirmIdParam) {
        throw {
            status: 404,
            message: `Can't find an organization with the id '${organizationId}'`,
        };
    }

    try {
        const aircraft = await Aircraft().findOne({
            where: { id: aircraftId, organizationId },
            attributes: ["id", "aircraft_reg", "aircraft_type", "clientId"],
        });
        if (!aircraft) {
            throw {
                status: 404,
                message: `Can't find an aircraft with the id '${aircraftId}'`,
            };
        }
        return aircraft;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { getOneAircraft };
