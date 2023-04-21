const IssuedPart = require("../../database/IssuedPart");

const createNewIssuedPart = (organizationId, newIssuedPart) => {
    const issuedPartToInsert = {
        ...newIssuedPart,
        job_id: newIssuedPart.job_id,
        part_id: newIssuedPart.part_id,
        organization_id: organizationId,
        engineer_id: newIssuedPart.engineer_id,
    };

    try {
        const createdIssuedPart = IssuedPart.createNewIssuedPart(
            organizationId,
            issuedPartToInsert
        );
        return createdIssuedPart;
    } catch (error) {
        throw error;
    }
};

module.exports = { createNewIssuedPart };
