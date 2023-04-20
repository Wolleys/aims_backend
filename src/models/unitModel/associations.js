const { unitModel } = require("./unit");
const { organizationModel } = require("../organizationModel/organization");

function unitAssociations(sequelize) {
    try {
        // Initialize models
        const Unit = unitModel(sequelize);
        const Organization = organizationModel(sequelize);

        // 1. Organization has many Units (hasMany) 1:n
        Organization.hasMany(Unit, {
            onDelete: "CASCADE",
            foreignKey: "organization_id",
        });
        Unit.belongsTo(Organization, {
            foreignKey: "organization_id",
        });

        return { Unit };
    } catch (error) {
        throw error;
    }
}

module.exports = { unitAssociations };
