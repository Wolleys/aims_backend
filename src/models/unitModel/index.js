const { DataTypes, Sequelize } = require("sequelize");

function createNewUnit(sequelize) {
    const Units = sequelize.define("units", {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            unique: true,
        },
        unit_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Units;
}

module.exports = { createNewUnit };
