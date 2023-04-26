const { jobModel } = require("../jobModel/job");
const { partModel } = require("../partModel/part");
const { issuedPartModel } = require("./issuedPart");
const { engineerModel } = require("../engineerModel/engineer");
const { organizationModel } = require("../organizationModel/organization");

function issuedPartAssociations(sequelize) {
    try {
        // Initialize models
        const Job = jobModel(sequelize);
        const Part = partModel(sequelize);
        const Engineer = engineerModel(sequelize);
        const IssuedPart = issuedPartModel(sequelize);
        const Organization = organizationModel(sequelize);

        // 1. Job belongs to many Parts n:m
        Job.belongsToMany(Part, { through: IssuedPart, foreignKey: "job_id" });
        Part.belongsToMany(Job, { through: IssuedPart, foreignKey: "part_id" });

        // 2. Engineer has many Issued Parts 1:n
        Engineer.hasMany(IssuedPart, {
            onDelete: "CASCADE",
            foreignKey: "engineer_id",
        });
        IssuedPart.belongsTo(Engineer, {
            foreignKey: "engineer_id",
        });

        // 3. Job has many Issued Parts 1:n
        Job.hasMany(IssuedPart, {
            onDelete: "CASCADE",
            foreignKey: "job_id",
        });
        IssuedPart.belongsTo(Job, {
            foreignKey: "job_id",
        });

        // 4. Part has many Issued Parts 1:n
        Part.hasMany(IssuedPart, {
            onDelete: "CASCADE",
            foreignKey: "part_id",
        });
        IssuedPart.belongsTo(Part, {
            foreignKey: "part_id",
        });

        // 5. Organization has many Issued Parts 1:n
        Organization.hasMany(IssuedPart, {
            onDelete: "CASCADE",
            foreignKey: "organization_id",
        });
        IssuedPart.belongsTo(Organization, {
            foreignKey: "organization_id",
        });

        return { IssuedPart };
    } catch (error) {
        throw error;
    }
}

module.exports = { issuedPartAssociations };
