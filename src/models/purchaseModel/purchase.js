const { DataTypes, Sequelize } = require("sequelize");

function purchaseModel(sequelize) {
    const Purchase = sequelize.define(
        "purchase",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                unique: true,
            },
            date_of_purchase: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            quantity_received: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            part_status: {
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
            expiry_date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            bp_in_usd: {
                type: DataTypes.FLOAT(11, 2),
                allowNull: false,
            },
            bp_in_local: {
                type: DataTypes.FLOAT(11, 2),
                allowNull: false,
            },
            sp_in_usd: {
                type: DataTypes.FLOAT(11, 2),
                allowNull: false,
            },
            created_by: {
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
            tableName: "purchase",
        }
    );

    return Purchase;
}

module.exports = { purchaseModel };
