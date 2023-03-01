const unitService = require("../../services/unitService");

const updateOneUnit = async (req, res) => {
    const updatedUnit = unitService.updateOneUnit();
    res.send("Update an existing unit");
};

module.exports = { updateOneUnit };
