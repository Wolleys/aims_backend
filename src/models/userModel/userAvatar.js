const { DataTypes, Sequelize } = require("sequelize");
const env = process.env;

function userAvatarModel(sequelize) {
    const UserAvatar = sequelize.define(
        "user_avatar",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                unique: true,
            },
            avatar: {
                type: DataTypes.STRING,
                defaultValue: `${env.SERVER_URL}/public/avatar.jpg`,
            },
        },
        {
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at",
            tableName: "user_avatar",
        }
    );

    return UserAvatar;
}

module.exports = { userAvatarModel };
