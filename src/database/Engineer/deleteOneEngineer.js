const { Engineer } = require("./engineerModel");
const { deleteItem } = require("../helpers/deleteItem");
const { checkOrganization } = require("../helpers/checkOrganization");

const deleteOneEngineer = async (organizationId, engineerId) => {
    await checkOrganization(organizationId);

    try {
        const itemToFind = "an engineer";
        await deleteItem(Engineer, itemToFind, engineerId, organizationId);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { deleteOneEngineer };
