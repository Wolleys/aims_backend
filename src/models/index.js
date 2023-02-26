const { createNewOrganization } = require("./organizationModel");
const {
    createOrganizationAddress,
} = require("./organizationModel/organizationAddress");

function setupModels(sequelize) {
    try {
        const Organization = createNewOrganization(sequelize);
        const OrganizationAddress = createOrganizationAddress(sequelize);

        // Associations
        // 1. *** Organization Associations ***
        Organization.hasOne(OrganizationAddress);
        OrganizationAddress.belongsTo(Organization, { onDelete: "cascade" });

        return {
            Organization,
            OrganizationAddress,
        };
    } catch (err) {
        throw err;
    }
}

module.exports = { setupModels };
