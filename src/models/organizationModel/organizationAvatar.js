const { DataTypes, Sequelize } = require("sequelize");
const env = process.env;

function organizationAvatarModel(sequelize) {
    const OrganizationAvatar = sequelize.define(
        "organization_avatar",
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
            tableName: "organization_avatar",
        }
    );

    return OrganizationAvatar;
}

module.exports = { organizationAvatarModel };
