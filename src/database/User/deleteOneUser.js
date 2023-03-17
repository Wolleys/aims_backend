const { User } = require("./userModel");
const { deleteItem } = require("../helpers/deleteItem");
const { checkOrganization } = require("../helpers/checkOrganization");

const deleteOneUser = async(organizationId, userId) => {
    await checkOrganization(organizationId);

    try {
        const itemToFind = "a user";
        await deleteItem(User, itemToFind, userId, organizationId);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { deleteOneUser };
