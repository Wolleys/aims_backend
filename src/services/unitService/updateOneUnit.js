const Unit = require("../../database/Unit");

const updateOneUnit = (organizationId, unitId, changes) => {
    try {
        const unit = Unit.updateOneUnit(organizationId, unitId, changes);
        return unit;
    } catch (error) {
        throw error;
    }
};

module.exports = { updateOneUnit };
