const { DataTypes, Sequelize } = require("sequelize");

function createNewEngineer(sequelize) {
    const Engineer = sequelize.define("engineer", {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            unique: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hire_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        staff_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_status: {
            type: DataTypes.STRING,
            defaultValue: "Pending",
        },
    });

    return Engineer;
}

module.exports = { createNewEngineer };
