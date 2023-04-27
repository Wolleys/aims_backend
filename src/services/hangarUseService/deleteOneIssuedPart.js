const HangarUse = require("../../database/HangarUse");

const deleteOneIssuedPart = (organizationId, issuedPartId) => {
    try {
        const issuedPart = HangarUse.deleteOneIssuedPart(
            organizationId,
            issuedPartId
        );
        return issuedPart;
    } catch (error) {
        throw error;
    }
};

module.exports = { deleteOneIssuedPart };
