const { Organization } = require("../Organization/organizationModel");
const { validatePassword } = require("../../middlewares/auth/bcrypt");

const login = async (user) => {
    try {
        const organization = await Organization().findOne({
            where: { email: user.email },
            attributes: ["id", "email", "password"],
        });

        if (!organization) {
            throw { status: 404, message: "User doesn't exist" };
        }

        await validatePassword(user.password, organization.password);
        return organization;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { login };
