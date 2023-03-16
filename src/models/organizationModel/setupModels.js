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
        Organization.hasOne(OrganizationAvatar, {
            onDelete: "CASCADE",
            foreignKey: "organization_id",
        });
        Organization.hasOne(OrganizationAddress, {
            onDelete: "CASCADE",
            foreignKey: "organization_id",
        });

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
