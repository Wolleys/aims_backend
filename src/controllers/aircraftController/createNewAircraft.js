const aircraftService = require("../../services/aircraftService");

const createNewAircraft = async (req, res) => {
    const createdAircraft = aircraftService.createNewAircraft();
    res.send("Create a new aircraft");
};

module.exports = { createNewAircraft };
