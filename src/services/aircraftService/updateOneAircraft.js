const Aircraft = require("../../database/Aircraft");

const updateOneAircraft = (organizationId, aircraftId, changes) => {
    try {
        const aircraft = Aircraft.updateOneAircraft(
            organizationId,
            aircraftId,
            changes
        );
        return aircraft;
    } catch (error) {
        throw error;
    }
};

module.exports = { updateOneAircraft };
