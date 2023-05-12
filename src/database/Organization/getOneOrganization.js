const getOneOrganization = async (model, organizationId) => {
    try {
        const organization = await model.Organization.findByPk(organizationId, {
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
                    model: model.OrganizationAddress,
                    as: "address",
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
                    model: model.OrganizationAvatar,
                    as: "avatar",
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
