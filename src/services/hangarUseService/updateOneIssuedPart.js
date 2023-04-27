const HangarUse = require("../../database/HangarUse");

const updateOneIssuedPart = (organizationId, issuedPartId, changes) => {
    try {
        const issuedPart = HangarUse.updateOneIssuedPart(
            organizationId,
            issuedPartId,
            changes
        );
        return issuedPart;
    } catch (error) {
        throw error;
    }
};

module.exports = { updateOneIssuedPart };
