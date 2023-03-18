const { User } = require("./userModel");
const { findItem } = require("../helpers/findItem");
const { checkOrganization } = require("../helpers/checkOrganization");

const updateOneUser = async (organizationId, userId, changes) => {
    await checkOrganization(organizationId);

    const findUser = "a user";
    await findItem(User, findUser, userId, organizationId);

    try {
        const updateUser = await User().update(
            { ...changes },
            { where: { id: userId, organization_id: organizationId } }
        );
        if (!updateUser) {
            throw {
                status: 400,
                message: `Error while updating a user with the id '${userId}'`,
            };
        }
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneUser };
