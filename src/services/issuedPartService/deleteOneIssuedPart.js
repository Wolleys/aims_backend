const IssuedPart = require("../../database/IssuedPart");

const deleteOneIssuedPart = (organizationId, issuedPartId) => {
    try {
        const issuedPart = IssuedPart.deleteOneIssuedPart(
            organizationId,
            issuedPartId
        );
        return issuedPart;
    } catch (error) {
        throw error;
    }
};

module.exports = { deleteOneIssuedPart };
