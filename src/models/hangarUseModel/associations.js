const { hangarUseModel } = require("./hangarUse");
const { partModel } = require("../partModel/part");
const { engineerModel } = require("../engineerModel/engineer");
const { organizationModel } = require("../organizationModel/organization");

function hangarUseAssociations(sequelize) {
    try {
        // Initialize models
        const Part = partModel(sequelize);
        const Engineer = engineerModel(sequelize);
        const HangarUse = hangarUseModel(sequelize);
        const Organization = organizationModel(sequelize);

        // 1. Part has many Hangar Use 1:n
        Part.hasMany(HangarUse, {
            onDelete: "CASCADE",
            foreignKey: "part_id",
        });
        HangarUse.belongsTo(Part, {
            foreignKey: "part_id",
        });

        // 2. Engineer has many Hangar Use 1:n
        Engineer.hasMany(HangarUse, {
            onDelete: "CASCADE",
            foreignKey: "engineer_id",
        });
        HangarUse.belongsTo(Engineer, {
            foreignKey: "engineer_id",
        });

        // 3. Organization has many Hangar Use 1:n
        Organization.hasMany(HangarUse, {
            onDelete: "CASCADE",
            foreignKey: "organization_id",
        });
        HangarUse.belongsTo(Organization, {
            foreignKey: "organization_id",
        });

        return { HangarUse };
    } catch (error) {
        throw error;
    }
}

module.exports = { hangarUseAssociations };
