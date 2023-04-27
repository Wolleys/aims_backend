const { Part } = require("../Part/partModel");
const { HangarUse } = require("./hangarUseModel");
const { Engineer } = require("../Engineer/engineerModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const getOneIssuedPart = async (organizationId, issuedPartId) => {
    await checkOrganization(organizationId);

    try {
        const issuedPart = await HangarUse().findOne({
            where: { id: issuedPartId, organization_id: organizationId },
            attributes: [
                "id",
                "date_of_issue",
                "part_status",
                "quantity_issued",
                "sp_in_usd",
            ],
            include: [
                {
                    model: Engineer(),
                    attributes: ["first_name", "last_name"],
                },
                {
                    model: Part(),
                    attributes: ["description", "part_number", "serial_number"],
                },
            ],
        });
        if (!issuedPart) {
            throw {
                status: 404,
                message: `Can't find an issued part with the id '${issuedPartId}'`,
            };
        }

        return issuedPart;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { getOneIssuedPart };
