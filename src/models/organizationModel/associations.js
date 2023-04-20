const { organizationModel } = require("./organization");
const { organizationAvatarModel } = require("./organizationAvatar");
const { organizationAddressModel } = require("./organizationAddress");

function organizationAssociations(sequelize) {
    try {
        // Initialize models
        const Organization = organizationModel(sequelize);
        const OrganizationAvatar = organizationAvatarModel(sequelize);
        const OrganizationAddress = organizationAddressModel(sequelize);

        // 1. Organization has one avatar 1:1
        Organization.hasOne(OrganizationAvatar, {
            as: "avatar",
            onDelete: "CASCADE",
            foreignKey: "organization_id",
        });
        OrganizationAvatar.belongsTo(Organization, {
            foreignKey: "organization_id",
        });

        // 2. Organization has one address 1:1
        Organization.hasOne(OrganizationAddress, {
            as: "address",
            onDelete: "CASCADE",
            foreignKey: "organization_id",
        });
        OrganizationAddress.belongsTo(Organization, {
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

module.exports = { organizationAssociations };
