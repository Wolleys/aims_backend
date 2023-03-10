const { User } = require("./userModel");
const { UserAvatar } = require("../UserAvatar/userAvatarModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const getOneUser = async (organizationId, userId) => {
    await checkOrganization(organizationId);

    try {
        const user = await User().findOne({
            where: { id: userId, organizationId },
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
                "user_status",
            ],
            include: [
                {
                    model: UserAvatar(),
                    attributes: ["id", "avatar"],
                },
            ],
        });
        if (!user) {
            throw {
                status: 404,
                message: `Can't find a user with the id '${userId}'`,
            };
        }
        return user;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { getOneUser };
