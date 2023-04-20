const { DataTypes, Sequelize } = require("sequelize");

function unitModel(sequelize) {
    const Unit = sequelize.define(
        "unit",
        {
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
        },
        {
            paranoid: true,
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at",
            tableName: "unit",
        }
    );

    return Unit;
}

module.exports = { unitModel };
