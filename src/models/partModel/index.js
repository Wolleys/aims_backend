const { DataTypes, Sequelize } = require("sequelize");

function createNewPart(sequelize) {
    const Part = sequelize.define("part", {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            unique: true,
        },
        date_of_entry: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        part_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        serial_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        part_status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        unit_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_of_production: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        shelf_life: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_by: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Part;
}

module.exports = { createNewPart };