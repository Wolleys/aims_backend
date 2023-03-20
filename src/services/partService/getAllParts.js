const Part = require("../../database/Part");

const getAllParts = (organizationId, filterParams) => {
    try {
        const allParts = Part.getAllParts(organizationId, filterParams);
        return allParts;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllParts };
