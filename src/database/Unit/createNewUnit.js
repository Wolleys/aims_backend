const { Unit } = require("./unitModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const createNewUnit = async (organizationId, newUnit) => {
    await checkOrganization(organizationId);

    const isAlreadyAdded = await Unit().findOne({
        where: { unit_name: newUnit.unit_name, organization_id: organizationId },
        attributes: ["unit_name", "organization_id"],
    });
    if (isAlreadyAdded) {
        throw {
            status: 400,
            message: `'${newUnit.unit_name}' has already been added!`,
        };
    }

    try {
        const createdUnit = await Unit().create(newUnit);
        return createdUnit;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { createNewUnit };
