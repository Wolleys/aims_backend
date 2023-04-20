const { DataTypes, Sequelize } = require("sequelize");

function createNewSupplier(sequelize) {
    const Supplier = sequelize.define(
        "supplier",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                unique: true,
            },
            company_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            website: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            first_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            job_title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            phone_number: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
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
            tableName: "supplier",
        }
    );

    return Supplier;
}

module.exports = { createNewSupplier };
