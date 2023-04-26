const IssuedPart = require("../../database/IssuedPart");

const getOneIssuedPart = (organizationId, issuedPartId) => {
    try {
        const issuedPart = IssuedPart.getOneIssuedPart(
            organizationId,
            issuedPartId
        );
        return issuedPart;
    } catch (error) {
        throw error;
    }
};

module.exports = { getOneIssuedPart };
