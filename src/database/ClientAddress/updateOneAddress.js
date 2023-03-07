const { ClientAddress } = require("./clientAddressModel");
const { Organization } = require("../Organization/organizationModel");

const updateOneAddress = async (organizationId, clientId, changes) => {
    const organizationExists = await Organization().findOne({
        where: { id: organizationId },
    });
    if (!organizationExists) {
        throw {
            status: 404,
            message: `Can't find an organization with the id '${organizationId}'`,
        };
    }

    const clientExists = await ClientAddress().findOne({
        where: { clientId },
    });
    if (!clientExists) {
        throw {
            status: 404,
            message: `Can't find a client with the id '${clientId}'`,
        };
    }

    try {
        const addressToUpdate = await ClientAddress().update(
            { ...changes },
            { where: { clientId } }
        );
        if (!addressToUpdate) {
            throw {
                status: 400,
                message: `Error while updating client address with the id '${clientId}'`,
            };
        }

        const returnUpdatedAddress = await ClientAddress().findOne({
            where: { clientId },
            attributes: [
                "id",
                "country",
                "address_line_1",
                "address_line_2",
                "city",
                "region",
                "postal_code",
            ],
        });
        return returnUpdatedAddress;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneAddress };
