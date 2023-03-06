const { Client } = require("./clientModel");
const { sequelize } = require("../dbConfig");
const { Organization } = require("../Organization/organizationModel");
const { ClientAvatar } = require("../ClientAvatar/clientAvatarModel");
const { ClientAddress } = require("../ClientAddress/clientAddressModel");

const createNewClient = async(newClient) => {
    return;
};

module.exports = { createNewClient };
