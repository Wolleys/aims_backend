const { Aircraft } = require("./aircraftModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const getOneAircraft = async (organizationId, aircraftId) => {
    await checkOrganization(organizationId);

    try {
        const aircraft = await Aircraft().findOne({
            where: { id: aircraftId, organization_id: organizationId },
            attributes: ["id", "aircraft_reg", "aircraft_type", "client_id"],
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
