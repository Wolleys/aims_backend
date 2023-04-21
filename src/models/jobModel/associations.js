const { jobModel } = require("./job");
const { aircraftModel } = require("../aircraftModel/aircraft");
const { organizationModel } = require("../organizationModel/organization");

function jobAssociations(sequelize) {
    try {
        // Initialize models
        const Job = jobModel(sequelize);
        const Aircraft = aircraftModel(sequelize);
        const Organization = organizationModel(sequelize);

        // 1. Aircraft has many Jobs 1:n
        Aircraft.hasMany(Job, {
            onDelete: "CASCADE",
            foreignKey: "aircraft_id",
        });
        Job.belongsTo(Aircraft, {
            foreignKey: "aircraft_id",
        });

        // 2. Organization has many Jobs 1:n
        Organization.hasMany(Job, {
            onDelete: "CASCADE",
            foreignKey: "organization_id",
        });
        Job.belongsTo(Organization, {
            foreignKey: "organization_id",
        });

        return { Job };
    } catch (error) {
        throw error;
    }
}

module.exports = { jobAssociations };
