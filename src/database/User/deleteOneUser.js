const { User } = require("./userModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const deleteOneUser = async(organizationId, userId) => {
    await checkOrganization(organizationId);

    try {
        const user = await User().destroy({
            where: { id: userId, organization_id: organizationId },
            attributes: ["id", "organization_id"],
        });
        if (!user) {
            throw {
                status: 400,
                message: `Can't find a user with the id '${userId}'`,
            };
        }
        return user;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { deleteOneUser };
