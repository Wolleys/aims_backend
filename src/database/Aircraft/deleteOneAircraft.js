const { Aircraft } = require("./aircraftModel");
const { deleteItem } = require("../helpers/deleteItem");
const { checkOrganization } = require("../helpers/checkOrganization");

const deleteOneAircraft = async (organizationId, aircraftId) => {
    await checkOrganization(organizationId);

    try {
        const itemToFind = "an aircraft";
        await deleteItem(Aircraft, itemToFind, aircraftId, organizationId);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { deleteOneAircraft };
