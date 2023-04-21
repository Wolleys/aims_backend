const { DataTypes, Sequelize } = require("sequelize");

function issuedPartHistoryModel(sequelize) {
    const IssuedPartHistory = sequelize.define(
        "issued_part_history",
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
            tableName: "issued_part_history",
        }
    );

    return IssuedPartHistory;
}

module.exports = { issuedPartHistoryModel };
