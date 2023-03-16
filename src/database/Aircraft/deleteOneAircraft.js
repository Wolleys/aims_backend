const { Aircraft } = require("./aircraftModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const deleteOneAircraft = async (organizationId, aircraftId) => {
    await checkOrganization(organizationId);

    try {
        const aircraft = await Aircraft().destroy({
            where: { id: aircraftId, organization_id: organizationId },
            attributes: ["id", "organization_id"],
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
