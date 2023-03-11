const { Engineer } = require("./engineerModel");
const { checkOrganization } = require("../helpers/checkOrganization");
const { EngineerAvatar } = require("../EngineerAvatar/engineerAvatarModel");

const getAllEngineers = async(organizationId) => {
    await checkOrganization(organizationId);

    try {
        const allEngineers = await Engineer().findAll({
            where: { organizationId },
            order: [["createdAt", "DESC"]],
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
                    attributes: ["id", "avatar"],
                },
            ],
        });
        return allEngineers;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

module.exports = { getAllEngineers };
