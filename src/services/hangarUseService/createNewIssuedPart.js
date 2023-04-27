const HangarUse = require("../../database/HangarUse");

const createNewIssuedPart = (organizationId, newIssuedPart) => {
    const issuedPartToInsert = {
        ...newIssuedPart,
        part_id: newIssuedPart.part_id,
        organization_id: organizationId,
        engineer_id: newIssuedPart.engineer_id,
    };

    try {
        const createdIssuedPart = HangarUse.createNewIssuedPart(
            organizationId,
            issuedPartToInsert
        );
        return createdIssuedPart;
    } catch (error) {
        throw error;
    }
};

module.exports = { createNewIssuedPart };
