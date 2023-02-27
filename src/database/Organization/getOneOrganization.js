const { Organization } = require("./organizationModel");
const { OrganizationAvatar } = require("../OrganizationAvatar/organizationAvatarModel");
const { OrganizationAddress } = require("../OrganizationAddress/organizationAddressModel");

const getOneOrganization = async (organizationId) => {
    try {
        const organization = await Organization().findByPk(organizationId, {
            attributes: [
                "id",
                "first_name",
                "last_name",
                "organization_name",
                "user_role",
                "phone_number",
                "website",
                "email",
            ],
            include: [
                {
                    model: OrganizationAddress(),
                    attributes: [
                        "id",
                        "country",
                        "address_line_1",
                        "address_line_2",
                        "city",
                        "region",
                        "postal_code",
                    ],
                },
                {
                    model: OrganizationAvatar(),
                    attributes: ["id", "avatar"],
                },
            ],
        });
        if (!organization) {
            throw {
                status: 404,
                message: `Can't find an organization with the id '${organizationId}'`,
            };
        }
        return organization;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { getOneOrganization };
