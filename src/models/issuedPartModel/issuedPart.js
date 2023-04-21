const { DataTypes, Sequelize } = require("sequelize");

function issuedPartModel(sequelize) {
    const IssuedPart = sequelize.define(
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
            part_status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            quantity_issued: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            quantity_on_hand: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            sp_in_usd: {
                type: DataTypes.FLOAT(11, 2),
                allowNull: false,
            },
            issued_by: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            // add foreign keys
            job_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: "job",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            part_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: "part",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            engineer_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: "engineer",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            organization_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: "organization",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
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

    return IssuedPart;
}

module.exports = { issuedPartModel };
