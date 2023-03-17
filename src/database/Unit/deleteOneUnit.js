const { Unit } = require("./unitModel");
const { deleteItem } = require("../helpers/deleteItem");
const { checkOrganization } = require("../helpers/checkOrganization");

const deleteOneUnit = async (organizationId, unitId) => {
    await checkOrganization(organizationId);

    try {
        const itemToFind = "a unit";
        await deleteItem(Unit, itemToFind, unitId, organizationId);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { deleteOneUnit };
