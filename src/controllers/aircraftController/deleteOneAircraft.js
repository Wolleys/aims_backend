const aircraftService = require("../../services/aircraftService");

const deleteOneAircraft = async (req, res) => {
    const deletedAircraft = aircraftService.deleteOneAircraft();
    res.send("Delete an existing aircraft");
};

module.exports = { deleteOneAircraft };
