const { DataTypes, Sequelize } = require("sequelize");

function hangarUseHistoryModel(sequelize) {
    const HangarUseHistory = sequelize.define(
        "hangar_use_history",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                unique: true,
            },
            quantity_issued: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            paranoid: true,
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at",
            tableName: "hangar_use_history",
        }
    );

    return HangarUseHistory;
}

module.exports = { hangarUseHistoryModel };
