const { DataTypes, Sequelize } = require("sequelize");
const env = process.env;

function createSupplierAvatar(sequelize) {
    const SupplierAvatar = sequelize.define("supplier_avatar", {
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

    return SupplierAvatar;
}

module.exports = { createSupplierAvatar };
