const IssuedPart = require("../../database/IssuedPart");

const updateOneIssuedPart = (organizationId, issuedPartId, changes) => {
    try {
        const issuedPart = IssuedPart.updateOneIssuedPart(
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
