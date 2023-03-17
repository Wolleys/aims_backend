const Part = require("../../database/Part");

const getAllParts = (organizationId) => {
    try {
        const allParts = Part.getAllParts(organizationId);
        return allParts;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllParts };
