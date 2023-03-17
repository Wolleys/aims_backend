const Part = require("../../database/Part");

const updateOnePart = (organizationId, partId, changes) => {
    try {
        const part = Part.updateOnePart(organizationId, partId, changes);
        return part;
    } catch (error) {
        throw error;
    }
};

module.exports = { updateOnePart };
