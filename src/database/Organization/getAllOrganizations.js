const { Organization } = require("./organizationModel");
const { OrganizationAvatar } = require("../OrganizationAvatar/organizationAvatarModel");
const { OrganizationAddress } = require("../OrganizationAddress/organizationAddressModel");

const getAllOrganizations = async () => {
    try {
        const allOrganizations = await Organization().findAll({
            order: [["created_at", "DESC"]],
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
        return allOrganizations;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

module.exports = { getAllOrganizations };
