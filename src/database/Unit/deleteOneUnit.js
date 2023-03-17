const { Unit } = require("./unitModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const deleteOneUnit = async (organizationId, unitId) => {
    await checkOrganization(organizationId);

    try {
        const unit = await Unit().destroy({
            where: { id: unitId, organization_id: organizationId },
            attributes: ["id", "organization_id"],
        });
        if (!unit) {
            throw {
                status: 400,
                message: `Can't find a unit with the id '${unitId}'`,
            };
        }
        return unit;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { deleteOneUnit };
