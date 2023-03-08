const { Aircraft } = require("./aircraftModel");
const { Organization } = require("../Organization/organizationModel");

const getAllAircrafts = async (organizationId) => {
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
