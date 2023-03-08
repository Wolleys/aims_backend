const { Aircraft } = require("./aircraftModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const getAllAircrafts = async (organizationId) => {
    await checkOrganization(organizationId);

    try {
        const allAircrafts = await Aircraft().findAll({
            where: { organizationId },
            order: [["createdAt", "DESC"]],
            attributes: ["id", "aircraft_reg", "aircraft_type", "clientId"],
        });
        return allAircrafts;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

module.exports = { getAllAircrafts };
