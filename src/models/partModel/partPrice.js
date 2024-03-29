const { DataTypes, Sequelize } = require("sequelize");

function partPriceModel(sequelize) {
    const PartPrice = sequelize.define(
        "part_price",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                unique: true,
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
        },
        {
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            tableName: "part_price",
        }
    );

    return PartPrice;
}

module.exports = { partPriceModel };
