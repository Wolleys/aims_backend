const { DataTypes, Sequelize } = require("sequelize");

function clientAddressModel(sequelize) {
    const ClientAddress = sequelize.define(
        "client_address",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                unique: true,
            },
            country: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            address_line_1: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            address_line_2: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            city: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            region: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            postal_code: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            tableName: "client_address",
        }
    );

    return ClientAddress;
}

module.exports = { clientAddressModel };
