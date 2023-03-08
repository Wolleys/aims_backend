const Aircraft = require("../../database/Aircraft");

const createNewAircraft = (organizationId, newAircraft) => {
    const aircraftToInsert = {
        ...newAircraft,
        organizationId,
        clientId: newAircraft.client_id,
    };

    try {
        const createdAircraft = Aircraft.createNewAircraft(
            organizationId,
            aircraftToInsert
        );
        return createdAircraft;
    } catch (error) {
        throw error;
    }
};

module.exports = { createNewAircraft };
