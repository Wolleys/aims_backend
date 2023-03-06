const { DataTypes, Sequelize } = require("sequelize");
const env = process.env;

function createClientAvatar(sequelize) {
    const ClientAvatar = sequelize.define("client_avatar", {
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

    return ClientAvatar;
}

module.exports = { createClientAvatar };
