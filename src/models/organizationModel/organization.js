const { DataTypes, Sequelize } = require("sequelize");

function createNewOrganization(sequelize) {
    const Organization = sequelize.define(
        "organization",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                unique: true,
            },
            first_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            organization_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            user_role: {
                type: DataTypes.STRING,
                defaultValue: "Admin",
            },
            phone_number: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            website: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
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
            tableName: "organization",
        }
    );

    return Organization;
}

module.exports = { createNewOrganization };
