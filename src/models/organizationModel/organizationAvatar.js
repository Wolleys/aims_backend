const { DataTypes, Sequelize } = require("sequelize");
const env = process.env;

function createOrganizationAvatar(sequelize) {
    const OrganizationAvatar = sequelize.define("organization_avatar", {
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
    });

    return OrganizationAvatar;
}

module.exports = { createOrganizationAvatar };
