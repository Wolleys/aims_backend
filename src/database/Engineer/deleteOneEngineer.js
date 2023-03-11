const { Engineer } = require("./engineerModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const deleteOneEngineer = async (organizationId, engineerId) => {
    await checkOrganization(organizationId);

    try {
        const engineer = await Engineer().destroy({
            where: { id: engineerId, organizationId },
            attributes: ["id", "organizationId"],
        });
        if (!engineer) {
            throw {
                status: 400,
                message: `Can't find an engineer with the id '${engineerId}'`,
            };
        }
        return engineer;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { deleteOneEngineer };
