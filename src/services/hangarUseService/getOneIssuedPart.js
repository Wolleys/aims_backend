const HangarUse = require("../../database/HangarUse");

const getOneIssuedPart = (organizationId, issuedPartId) => {
    try {
        const issuedPart = HangarUse.getOneIssuedPart(
            organizationId,
            issuedPartId
        );
        return issuedPart;
    } catch (error) {
        throw error;
    }
};

module.exports = { getOneIssuedPart };
