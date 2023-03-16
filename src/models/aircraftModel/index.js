const { DataTypes, Sequelize } = require("sequelize");

function createNewAircraft(sequelize) {
    const Aircraft = sequelize.define(
        "aircraft",
        {
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
            },
        },
        {
            paranoid: true,
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at",
            tableName: "aircraft",
        }
    );

    return Aircraft;
}

module.exports = { createNewAircraft };
