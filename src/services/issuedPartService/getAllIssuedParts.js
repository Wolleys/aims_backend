const IssuedPart = require("../../database/IssuedPart");

const getAllIssuedParts = (organizationId) => {
    try {
        const allIssuedParts = IssuedPart.getAllIssuedParts(organizationId);
        return allIssuedParts;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllIssuedParts };
