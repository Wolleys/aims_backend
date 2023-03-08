const { Aircraft } = require("./aircraftModel");
const { Organization } = require("../Organization/organizationModel");

const deleteOneAircraft = async (organizationId, aircraftId) => {
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
        const aircraft = await Aircraft().destroy({
            where: { id: aircraftId, organizationId },
        });
        if (!aircraft) {
            throw {
                status: 400,
                message: `Can't find an aircraft with the id '${aircraftId}'`,
            };
        }
        return aircraft;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { deleteOneAircraft };
