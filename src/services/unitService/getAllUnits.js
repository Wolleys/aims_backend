const Unit = require("../../database/Unit");

const getAllUnits = (organizationId) => {
    try {
        const allUnits = Unit.getAllUnits(organizationId);
        return allUnits;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllUnits };
