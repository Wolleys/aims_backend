const { clientModel } = require("./client");
const { clientAvatarModel } = require("./clientAvatar");
const { clientAddressModel } = require("./clientAddress");
const { organizationModel } = require("../organizationModel/organization");

function clientAssociations(sequelize) {
    try {
        // Initialize models
        const Client = clientModel(sequelize);
        const Organization = organizationModel(sequelize);
        const ClientAvatar = clientAvatarModel(sequelize);
        const ClientAddress = clientAddressModel(sequelize);

        // 1. Client has one avatar 1:1
        Client.hasOne(ClientAvatar, {
            as: "avatar",
            onDelete: "CASCADE",
            foreignKey: "client_id",
        });
        ClientAvatar.belongsTo(Client, {
            foreignKey: "client_id",
        });

        // 2. Client has one address 1:1
        Client.hasOne(ClientAddress, {
            as: "address",
            onDelete: "CASCADE",
            foreignKey: "client_id",
        });
        ClientAddress.belongsTo(Client, {
            foreignKey: "client_id",
        });

        // 3. Organization has many Clients (hasMany) 1:n
        Organization.hasMany(Client, {
            onDelete: "CASCADE",
            foreignKey: "organization_id",
        });
        Client.belongsTo(Organization, {
            foreignKey: "organization_id",
        });

        return {
            Client,
            ClientAvatar,
            ClientAddress,
        };
    } catch (error) {
        throw error;
    }
}

module.exports = { clientAssociations };
