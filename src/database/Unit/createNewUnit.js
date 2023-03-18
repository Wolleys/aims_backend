const { Unit } = require("./unitModel");
const { isAlreadyAdded } = require("../helpers/isAlreadyAdded");
const { checkOrganization } = require("../helpers/checkOrganization");

const createNewUnit = async (organizationId, newUnit) => {
    await checkOrganization(organizationId);

    // Check if unit name already exists
    const unitNameCol = "unit_name";
    const unitNameVal = newUnit.unit_name;
    const unitNameAttrs = ["unit_name", "organization_id"];
    await isAlreadyAdded(Unit, unitNameCol, unitNameVal, organizationId, unitNameAttrs);

    try {
        const createdUnit = await Unit().create(newUnit);
        return createdUnit;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { createNewUnit };
