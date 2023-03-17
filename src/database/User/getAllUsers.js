const { User } = require("./userModel");
const { UserAvatar } = require("../UserAvatar/userAvatarModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const getAllUsers = async (organizationId) => {
    await checkOrganization(organizationId);

    try {
        const allUsers = await User().findAll({
            where: { organization_id: organizationId },
            order: [["created_at", "DESC"]],
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
                    as: "avatar",
                    attributes: ["id", "avatar"],
                },
            ],
        });
        return allUsers;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

module.exports = { getAllUsers };
