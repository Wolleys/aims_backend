const { Unit } = require("./unitModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const getOneUnit = async (organizationId, unitId) => {
    await checkOrganization(organizationId);

    try {
        const unit = await Unit().findOne({
            where: { id: unitId, organization_id: organizationId },
            attributes: ["id", "unit_name"],
        });
        if (!unit) {
            throw {
                status: 404,
                message: `Can't find a unit with the id '${unitId}'`,
            };
        }
        return unit;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { getOneUnit };
