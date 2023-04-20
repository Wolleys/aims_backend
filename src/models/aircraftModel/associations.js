const { aircraftModel } = require("./aircraft");
const { clientModel } = require("../clientModel/client");
const { organizationModel } = require("../organizationModel/organization");

function aircraftAssociations(sequelize) {
    try {
        // Initialize models
        const Client = clientModel(sequelize);
        const Aircraft = aircraftModel(sequelize);
        const Organization = organizationModel(sequelize);

        // 1. Client has many aircrafts (hasMany) 1:n
        Client.hasMany(Aircraft, {
            onDelete: "CASCADE",
            foreignKey: "client_id",
        });
        Aircraft.belongsTo(Client, {
            foreignKey: "client_id",
        });

        // 2. Organization has many Aircrafts (hasMany) 1:n
        Organization.hasMany(Aircraft, {
            onDelete: "CASCADE",
            foreignKey: "organization_id",
        });
        Aircraft.belongsTo(Organization, {
            foreignKey: "organization_id",
        });

        return { Aircraft };
    } catch (error) {
        throw error;
    }
}

module.exports = { aircraftAssociations };
