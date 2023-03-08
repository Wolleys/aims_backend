const Aircraft = require("../../database/Aircraft");

const deleteOneAircraft = (organizationId, aircraftId) => {
    try {
        const aircraft = Aircraft.deleteOneAircraft(organizationId, aircraftId);
        return aircraft;
    } catch (error) {
        throw error;
    }
};

module.exports = { deleteOneAircraft };
