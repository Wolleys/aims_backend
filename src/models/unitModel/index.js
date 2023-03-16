const { DataTypes, Sequelize } = require("sequelize");

function createNewUnit(sequelize) {
    const Unit = sequelize.define("unit", {
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

    return Unit;
}

module.exports = { createNewUnit };
