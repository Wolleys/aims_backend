const { Organization } = require("./organizationModel");
const { OrganizationAddress } = require("../OrganizationAddress/organizationAddressModel");

const getAllOrganizations = async () => {
    try {
        const allOrganizations = await Organization().findAll({
            order: [["createdAt", "DESC"]],
            attributes: [
                "id",
                "first_name",
                "last_name",
                "organization_name",
                "avatar",
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
            ],
        });
        return allOrganizations;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

module.exports = { getAllOrganizations };
