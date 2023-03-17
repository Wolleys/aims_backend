const { User } = require("./userModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const updateOneUser = async (organizationId, userId, changes) => {
    await checkOrganization(organizationId);

    const userExists = await User().findOne({
        where: { id: userId, organization_id: organizationId },
        attributes: ["id", "organization_id"],
    });
    if (!userExists) {
        throw {
            status: 400,
            message: `Can't find a user with the id '${userId}'`,
        };
    }

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

        const returnUpdatedUser = await User().findOne({
            where: { id: userId, organization_id: organizationId },
            attributes: [
                "id",
                "first_name",
                "last_name",
                "id_number",
                "phone_number",
                "gender",
                "hire_date",
                "staff_number",
                "user_role",
                "email",
                "user_status"
            ],
        });
        return returnUpdatedUser;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneUser };
