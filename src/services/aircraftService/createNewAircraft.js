const Aircraft = require("../../database/Aircraft");

const createNewAircraft = (organizationId, newAircraft) => {
    const aircraftToInsert = {
        ...newAircraft,
        organization_id: organizationId,
        client_id: newAircraft.client_id,
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
