const { Unit } = require("./unitModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const getAllUnits = async (organizationId) => {
    await checkOrganization(organizationId);

    try {
        const allUnits = await Unit().findAll({
            where: { organizationId },
            order: [["unit_name", "ASC"]],
            attributes: ["id", "unit_name"],
        });
        return allUnits;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

module.exports = { getAllUnits };
