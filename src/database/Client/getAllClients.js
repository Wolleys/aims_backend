const { Client } = require("./clientModel");
const { Organization } = require("../Organization/organizationModel");
const { ClientAvatar } = require("../ClientAvatar/clientAvatarModel");
const { ClientAddress } = require("../ClientAddress/clientAddressModel");

const getAllClients = async (organizationId) => {
    const confirmIdParam = await Organization().findOne({
        where: { id: organizationId },
    });
    if (!confirmIdParam) {
        throw {
            status: 404,
            message: `Can't find an organization with the id '${organizationId}'`,
        };
    }
    try {
        const allClients = await Client().findAll({
            where: { organizationId },
            order: [["createdAt", "DESC"]],
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
