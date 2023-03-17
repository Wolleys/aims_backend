const { createNewUser } = require("./index");
const { createUserAvatar } = require("./userAvatar");

function setupUserModels(sequelize) {
    try {
        // Create user models
        const User = createNewUser(sequelize);
        const UserAvatar = createUserAvatar(sequelize);

        // *** User 1:1 association ***
        User.hasOne(UserAvatar, {
            onDelete: "CASCADE",
            foreignKey: "user_id",
            as: "avatar",
        });

        return {
            User,
            UserAvatar,
        };
    } catch (error) {
        throw error;
    }
}

module.exports = { setupUserModels };
