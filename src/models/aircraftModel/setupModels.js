const { createNewAircraft } = require("./index");

function setupAircraftModels(sequelize) {
    try {
        // Create aircraft model
        const Aircraft = createNewAircraft(sequelize);

        return { Aircraft };
    } catch (error) {
        throw error;
    }
}

module.exports = { setupAircraftModels };
