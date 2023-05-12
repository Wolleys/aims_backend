const getAllOrganizations = async (model) => {
    try {
        const allOrganizations = await model.Organization.findAll({
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
        return allOrganizations;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

module.exports = { getAllOrganizations };
