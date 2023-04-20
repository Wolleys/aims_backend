const { userModel } = require("./user");
const { userAvatarModel } = require("./userAvatar");
const { organizationModel } = require("../organizationModel/organization");

function userAssociations(sequelize) {
    try {
        // Initialize models
        const User = userModel(sequelize);
        const UserAvatar = userAvatarModel(sequelize);
        const Organization = organizationModel(sequelize);

        // 1. User has one avatar 1:1
        User.hasOne(UserAvatar, {
            as: "avatar",
            onDelete: "CASCADE",
            foreignKey: "user_id",
        });
        UserAvatar.belongsTo(User, {
            foreignKey: "user_id",
        });

        // 2. Organization has many Users 1:n
        Organization.hasMany(User, {
            onDelete: "CASCADE",
            foreignKey: "organization_id",
        });
        User.belongsTo(Organization, {
            foreignKey: "organization_id",
        });

        return { User, UserAvatar };
    } catch (error) {
        throw error;
    }
}

module.exports = { userAssociations };
