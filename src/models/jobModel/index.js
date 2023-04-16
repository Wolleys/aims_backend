const { DataTypes, Sequelize } = require("sequelize");

function createNewJob(sequelize) {
    const Job = sequelize.define(
        "job",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                unique: true,
            },
            date_opened: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            job_number: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            job_status: {
                type: DataTypes.STRING,
                defaultValue: "Opened",
            },
            date_closed: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
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
            tableName: "job",
        }
    );

    return Job;
}

module.exports = { createNewJob };
