const { DataTypes, Sequelize } = require("sequelize");
const env = process.env;

function createUserAvatar(sequelize) {
    const UserAvatar = sequelize.define("user_avatar", {
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

    return UserAvatar;
}

module.exports = { createUserAvatar };
