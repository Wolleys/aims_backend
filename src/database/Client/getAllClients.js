const { Client } = require("./clientModel");
const { checkOrganization } = require("../helpers/checkOrganization");
const { ClientAvatar } = require("../ClientAvatar/clientAvatarModel");
const { ClientAddress } = require("../ClientAddress/clientAddressModel");

const getAllClients = async (organizationId) => {
    await checkOrganization(organizationId);

    try {
        const allClients = await Client().findAll({
            where: { organization_id: organizationId },
            order: [["created_at", "DESC"]],
            attributes: [
                "id",
                "first_name",
                "last_name",
                "company_name",
                "job_title",
                "phone_number",
                "website",
                "email",
            ],
            include: [
                {
                    model: ClientAddress(),
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
                    model: ClientAvatar(),
                    as: "avatar",
                    attributes: ["id", "avatar"],
                },
            ],
        });
        return allClients;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

module.exports = { getAllClients };
