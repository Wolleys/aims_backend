const { engineerModel } = require("./engineer");
const { engineerAvatarModel } = require("./engineerAvatar");
const { organizationModel } = require("../organizationModel/organization");

function engineerAssociations(sequelize) {
    try {
        // Initialize models
        const Engineer = engineerModel(sequelize);
        const Organization = organizationModel(sequelize);
        const EngineerAvatar = engineerAvatarModel(sequelize);

        // 1. Engineer has one avatar 1:1
        Engineer.hasOne(EngineerAvatar, {
            as: "avatar",
            onDelete: "CASCADE",
            foreignKey: "engineer_id",
        });
        EngineerAvatar.belongsTo(Engineer, {
            foreignKey: "engineer_id",
        });

        // 2. Organization has many Engineers 1:n
        Organization.hasMany(Engineer, {
            onDelete: "CASCADE",
            foreignKey: "organization_id",
        });
        Engineer.belongsTo(Organization, {
            foreignKey: "organization_id",
        });

        return { Engineer, EngineerAvatar };
    } catch (error) {
        throw error;
    }
}

module.exports = { engineerAssociations };
