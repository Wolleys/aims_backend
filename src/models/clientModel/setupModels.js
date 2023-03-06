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
        // Client has one avatar (belongsTo) 1:1
        // Client has one address (belongsTo) 1:1
        Client.hasOne(ClientAvatar, { onDelete: "CASCADE" });
        Client.hasOne(ClientAddress, { onDelete: "CASCADE" });
        ClientAvatar.belongsTo(Client);
        ClientAddress.belongsTo(Client);
        
        return {
            Client,
            ClientAvatar,
            ClientAddress
        }
    } catch (error) {
        throw error;
    }
}

module.exports = { setupClientModels };
