const { DataTypes, Sequelize } = require("sequelize");

function createPartQuantity(sequelize) {
    const PartQuantity = sequelize.define(
        "part_quantity",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                unique: true,
            },
            starting_quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            quantity_received: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            quantity_issued: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            quantity_on_hand: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            reorder_level: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            tableName: "part_quantity",
        }
    );

    return PartQuantity;
}

module.exports = { createPartQuantity };
