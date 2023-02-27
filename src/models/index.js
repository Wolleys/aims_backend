const { createNewOrganization } = require("./organizationModel");
const { createOrganizationAvatar } = require("./organizationModel/organizationAvatar");
const { createOrganizationAddress } = require("./organizationModel/organizationAddress");

function setupModels(sequelize) {
    try {
        const Organization = createNewOrganization(sequelize);
        const OrganizationAvatar = createOrganizationAvatar(sequelize);
        const OrganizationAddress = createOrganizationAddress(sequelize);

        // Associations
        // 1. *** Organization Associations ***
        Organization.hasOne(OrganizationAvatar);
        Organization.hasOne(OrganizationAddress);
        OrganizationAvatar.belongsTo(Organization, { onDelete: "cascade" });
        OrganizationAddress.belongsTo(Organization, { onDelete: "cascade" });

        return {
            Organization,
            OrganizationAvatar,
            OrganizationAddress,
        };
    } catch (err) {
        throw err;
    }
}

module.exports = { setupModels };
