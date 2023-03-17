const { Engineer } = require("./engineerModel");
const { checkOrganization } = require("../helpers/checkOrganization");
const { EngineerAvatar } = require("../EngineerAvatar/engineerAvatarModel");

const getOneEngineer = async (organizationId, engineerId) => {
    await checkOrganization(organizationId);

    try {
        const engineer = await Engineer().findOne({
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
            include: [
                {
                    model: EngineerAvatar(),
                    as: "avatar",
                    attributes: ["id", "avatar"],
                },
            ],
        });
        if (!engineer) {
            throw {
                status: 404,
                message: `Can't find an engineer with the id '${engineerId}'`,
            };
        }
        return engineer;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { getOneEngineer };
