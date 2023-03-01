const aircraftService = require("../../services/aircraftService");

const updateOneAircraft = async (req, res) => {
    const updatedAircraft = aircraftService.updateOneAircraft();
    res.send("Update an existing aircraft");
};

module.exports = { updateOneAircraft };
