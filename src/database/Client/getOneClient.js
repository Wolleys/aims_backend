const { Client } = require("./clientModel");
const { Organization } = require("../Organization/organizationModel");
const { ClientAvatar } = require("../ClientAvatar/clientAvatarModel");
const { ClientAddress } = require("../ClientAddress/clientAddressModel");

const getOneClient = async(organizationId, clientId) => {
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
        const client = await Client().findOne({
            where: { id: clientId, organizationId },
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
        if (!client) {
            throw {
                status: 404,
                message: `Can't find a client with the id '${clientId}'`,
            };
        }
        return client;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { getOneClient };
