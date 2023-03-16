const { Aircraft } = require("./aircraftModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const getAllAircrafts = async (organizationId) => {
    await checkOrganization(organizationId);

    try {
        const allAircrafts = await Aircraft().findAll({
            where: { organization_id: organizationId },
            order: [["created_at", "DESC"]],
            attributes: ["id", "aircraft_reg", "aircraft_type", "client_id"],
        });
        return allAircrafts;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

module.exports = { getAllAircrafts };
