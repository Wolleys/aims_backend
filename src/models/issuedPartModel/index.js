const { DataTypes, Sequelize } = require("sequelize");

function createNewIssuedPart(sequelize) {
    const issuedPart = sequelize.define(
        "issued_part",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                unique: true,
            },
            date_of_issue: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            job_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            part_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            part_status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            quantity_issued: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            quantity_remaining: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            sp_in_usd: {
                type: DataTypes.FLOAT(11, 2),
                allowNull: false,
            },
            issued_to: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            issued_by: {
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
            tableName: "issued_part",
        }
    );

    return issuedPart;
}

module.exports = { createNewIssuedPart };
