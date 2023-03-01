const unitService = require("../../services/unitService");

const createNewUnit = async (req, res) => {
    const createdUnit = unitService.createNewUnit();
    res.send("Create a new unit");
};

module.exports = { createNewUnit };
