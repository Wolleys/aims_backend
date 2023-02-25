const { createNewOrganization } = require("./organizationModel");
const { createOrganizationAddress } = require("./organizationModel/organizationAddress");

function setupModels(sequelize) {
    try {
        const Organization = createNewOrganization(sequelize);
        const OrganizationAddress = createOrganizationAddress(sequelize);

        return {
            Organization,
            OrganizationAddress,
        };
    } catch (err) {
        throw err;
    }
}

module.exports = { setupModels };
