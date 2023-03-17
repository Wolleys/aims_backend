const { Part } = require("./partModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const deleteOnePart = async(organizationId, partId) => {
    await checkOrganization(organizationId);

    try {
        const part = await Part().destroy({
            where: { id: partId, organization_id: organizationId },
            attributes: ["id", "organization_id"],
        });
        if (!part) {
            throw {
                status: 400,
                message: `Can't find a part with the id '${partId}'`,
            };
        }
        return part;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { deleteOnePart };
