const Aircraft = require("../../database/Aircraft");

const getOneAircraft = (organizationId, aircraftId) => {
    try {
        const aircraft = Aircraft.getOneAircraft(organizationId, aircraftId);
        return aircraft;
    } catch (error) {
        throw error;
    }
};

module.exports = { getOneAircraft };
