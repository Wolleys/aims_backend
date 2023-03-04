const { createNewOrganization } = require("./index");
const { createOrganizationAvatar } = require("./organizationAvatar");
const { createOrganizationAddress } = require("./organizationAddress");

function setupOrganizationModels(sequelize) {
    try {
        // Create organization models
        const Organization = createNewOrganization(sequelize);
        const OrganizationAvatar = createOrganizationAvatar(sequelize);
        const OrganizationAddress = createOrganizationAddress(sequelize);

        // *** Organization 1:1 association ***
        // Organization has one avatar (belongsTo) 1:1
        // Organization has one address (belongsTo) 1:1
        Organization.hasOne(OrganizationAvatar, { onDelete: "CASCADE" });
        Organization.hasOne(OrganizationAddress, { onDelete: "CASCADE" });
        OrganizationAvatar.belongsTo(Organization);
        OrganizationAddress.belongsTo(Organization);

        return {
            Organization,
            OrganizationAvatar,
            OrganizationAddress,
        };
    } catch (error) {
        throw error;
    }
}

module.exports = { setupOrganizationModels };
