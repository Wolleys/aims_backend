const { createNewClient } = require("./index");
const { createClientAvatar } = require("./clientAvatar");
const { createClientAddress } = require("./clientAddress");

function setupClientModels(sequelize) {
    try {
        // Create client models
        const Client = createNewClient(sequelize);
        const ClientAvatar = createClientAvatar(sequelize);
        const ClientAddress = createClientAddress(sequelize);

        // *** Client 1:1 association ***
        Client.hasOne(ClientAvatar, {
            onDelete: "CASCADE",
            foreignKey: "client_id",
            as: "avatar",
        });
        Client.hasOne(ClientAddress, {
            onDelete: "CASCADE",
            foreignKey: "client_id",
            as: "address",
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

module.exports = { setupClientModels };
