const { IssuedPart } = require("./issuedPartModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const getAllIssuedParts = async (organizationId) => {
    await checkOrganization(organizationId);

    try {
        const allIssuedParts = await IssuedPart().findAndCountAll({
            where: { organization_id: organizationId },
            order: [["created_at", "DESC"]],
            attributes: [
                "id",
                "date_of_issue",
                "quantity_issued",
                "quantity_on_hand",
                "sp_in_usd",
                "job_id",
                "part_id",
                "engineer_id",
            ],
        });
        return allIssuedParts;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

module.exports = { getAllIssuedParts };
