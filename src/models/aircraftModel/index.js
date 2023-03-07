const { DataTypes, Sequelize } = require("sequelize");

function createNewAircraft(sequelize) {
    const Aircrafts = sequelize.define("aircrafts", {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            unique: true,
        },
        aircraft_reg: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        aircraft_type: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });

    return Aircrafts;
}

module.exports = { createNewAircraft };
