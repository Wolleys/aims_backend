const HangarUse = require("../../database/HangarUse");

const getAllIssuedParts = (organizationId) => {
    try {
        const allIssuedParts = HangarUse.getAllIssuedParts(organizationId);
        return allIssuedParts;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllIssuedParts };
