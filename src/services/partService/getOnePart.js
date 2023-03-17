const Part = require("../../database/Part");

const getOnePart = (organizationId, partId) => {
    try {
        const part = Part.getOnePart(organizationId, partId);
        return part;
    } catch (error) {
        throw error;
    }
};

module.exports = { getOnePart };
