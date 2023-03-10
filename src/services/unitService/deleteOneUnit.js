const Unit = require("../../database/Unit");

const deleteOneUnit = (organizationId, unitId) => {
    try {
        const unit = Unit.deleteOneUnit(organizationId, unitId);
        return unit;
    } catch (error) {
        throw error;
    }
};

module.exports = { deleteOneUnit };
