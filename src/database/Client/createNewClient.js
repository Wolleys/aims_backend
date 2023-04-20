const { Client } = require("./clientModel");
const { sequelize } = require("../dbConfig");
const { isAlreadyAdded } = require("../helpers/isAlreadyAdded");
const { checkOrganization } = require("../helpers/checkOrganization");
const { ClientAvatar } = require("../ClientAvatar/clientAvatarModel");
const { ClientAddress } = require("../ClientAddress/clientAddressModel");

const createNewClient = async (newClient, organizationId) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        await checkOrganization(organizationId);

        // Check if email already exists
        const emailCol = "email";
        const emailVal = newClient.email;
        const emailAttrs = ["email", "organization_id"];
        await isAlreadyAdded(Client, emailCol, emailVal, organizationId, emailAttrs);

        const createdClient = await Client().create(newClient, {
            transaction,
        });

        const address = {
            ...newClient,
            client_id: createdClient.id,
        };

        const avatar = {
            client_id: createdClient.id,
        };

        await ClientAvatar().create(avatar, { transaction });
        await ClientAddress().create(address, { transaction });
        await transaction.commit();

        return createdClient;
    } catch (error) {
        if (transaction) {
            transaction.rollback();
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { createNewClient };
