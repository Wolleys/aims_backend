const { DataTypes, Sequelize } = require("sequelize");
const env = process.env;

function createEngineerAvatar(sequelize) {
    const EngineerAvatar = sequelize.define("engineer_avatar", {
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

    return EngineerAvatar;
}

module.exports = { createEngineerAvatar };
