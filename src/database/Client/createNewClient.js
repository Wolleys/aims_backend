const { Client } = require("./clientModel");
const { sequelize } = require("../dbConfig");
const { checkOrganization } = require("../helpers/checkOrganization");
const { ClientAvatar } = require("../ClientAvatar/clientAvatarModel");
const { ClientAddress } = require("../ClientAddress/clientAddressModel");

const createNewClient = async (newClient, organizationId) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        await checkOrganization(organizationId);

        const isAlreadyAdded = await Client().findOne({
            where: { email: newClient.email },
        });
        if (isAlreadyAdded) {
            throw {
                status: 400,
                message: `'${newClient.email}' is already in use!`,
            };
        }

        const createdClient = await Client().create(newClient, {
            transaction,
        });

        const address = {
            country: newClient.country,
            address_line_1: newClient.address_line_1,
            address_line_2: newClient.address_line_2,
            city: newClient.city,
            region: newClient.region,
            postal_code: newClient.postal_code,
            clientId: createdClient.id,
        };

        const avatar = {
            clientId: createdClient.id,
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
