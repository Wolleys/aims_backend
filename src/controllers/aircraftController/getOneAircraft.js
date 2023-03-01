const aircraftService = require("../../services/aircraftService");

const getOneAircraft = async (req, res) => {
    const aircraft = aircraftService.getOneAircraft();
    res.send("Get an existing aircraft");
};

module.exports = { getOneAircraft };
