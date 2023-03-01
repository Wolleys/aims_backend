const aircraftService = require("../../services/aircraftService");

const getAllAircrafts = async (req, res) => {
    const allAircrafts = aircraftService.getAllAircrafts();
    res.send("Get all aircrafts");
};

module.exports = { getAllAircrafts };
