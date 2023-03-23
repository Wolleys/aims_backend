const { DataTypes, Sequelize } = require("sequelize");

function createNewPurchaseHistory(sequelize) {
    const PurchaseHistory = sequelize.define(
        "purchase_history",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                unique: true,
            },
            quantity_received: {
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
            tableName: "purchase_history",
        }
    );

    return PurchaseHistory;
}

module.exports = { createNewPurchaseHistory };
