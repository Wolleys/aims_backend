const Unit = require("../../database/Unit");

const getOneUnit = (organizationId, unitId) => {
    try {
        const unit = Unit.getOneUnit(organizationId, unitId);
        return unit;
    } catch (error) {
        throw error;
    }
};

module.exports = { getOneUnit };
