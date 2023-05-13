const { validatePassword } = require("../../middlewares/auth/bcrypt");

const login = async (model, user) => {
    try {
        const orgUser = await model.Organization.findOne({
            where: { email: user.email },
            attributes: ["id", "user_role", "email", "password"],
        });

        if (!orgUser) {
            throw { status: 404, message: "User doesn't exist" };
        }

        await validatePassword(user.password, orgUser.password);
        // Destructure orgUser object and seperate password field from the rest
        const { password, ...data } = await orgUser.toJSON();
        return data;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { login };
