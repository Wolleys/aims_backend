const { Engineer } = require("./engineerModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const updateOneEngineer = async (organizationId, engineerId, changes) => {
    await checkOrganization(organizationId);

    const engineerExists = await Engineer().findOne({
        where: { id: engineerId, organization_id: organizationId },
        attributes: ["id", "organization_id"],
    });
    if (!engineerExists) {
        throw {
            status: 400,
            message: `Can't find an engineer with the id '${engineerId}'`,
        };
    }

    try {
        const updateEngineer = await Engineer().update(
            { ...changes },
            { where: { id: engineerId, organization_id: organizationId } }
        );
        if (!updateEngineer) {
            throw {
                status: 400,
                message: `Error while updating an engineer with the id '${engineerId}'`,
            };
        }

        const returnUpdatedEngineer = await Engineer().findOne({
            where: { id: engineerId, organization_id: organizationId },
            attributes: [
                "id",
                "first_name",
                "last_name",
                "id_number",
                "phone_number",
                "gender",
                "hire_date",
                "staff_number",
                "email",
                "user_status",
            ],
        });
        return returnUpdatedEngineer;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneEngineer };
