const { DataTypes, Sequelize } = require("sequelize");
const env = process.env;

function engineerAvatarModel(sequelize) {
    const EngineerAvatar = sequelize.define(
        "engineer_avatar",
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
            tableName: "engineer_avatar",
        }
    );

    return EngineerAvatar;
}

module.exports = { engineerAvatarModel };
