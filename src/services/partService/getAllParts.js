const Part = require("../../database/Part");

const getAllParts = (organizationId, page, size, q) => {
    try {
        const allParts = Part.getAllParts(organizationId, page, size, q);
        return allParts;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllParts };
