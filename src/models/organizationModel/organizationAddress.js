const { DataTypes, Sequelize } = require("sequelize");

function createOrganizationAddress(sequelize) {
    const OrganizationAddress = sequelize.define("organization_address", {
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
        organization_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                // organization_address belongsTo organizations 1:1
                model: "organizations",
                key: "id",
            },
        },
    });

    OrganizationAddress.associate = (models) => {
        OrganizationAddress.belongsTo(models.Organization, {
            foreignKey: "organization_id",
            as: organization,
        });
    };

    return OrganizationAddress;
}

module.exports = { createOrganizationAddress };
