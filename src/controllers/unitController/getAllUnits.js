const unitService = require("../../services/unitService");

const getAllUnits = async (req, res) => {
    const allUnits = unitService.getAllUnits();
    res.send("Get all units");
};

module.exports = { getAllUnits };
