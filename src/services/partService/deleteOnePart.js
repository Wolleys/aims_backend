const Part = require("../../database/Part");

const deleteOnePart = (organizationId, partId) => {
    try {
        const part = Part.deleteOnePart(organizationId, partId);
        return part;
    } catch (error) {
        throw error;
    }
};

module.exports = { deleteOnePart };
