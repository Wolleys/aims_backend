const unitService = require("../../services/unitService");

const getOneUnit = async (req, res) => {
    const unit = unitService.getOneUnit();
    res.send("Get an existing unit");
};

module.exports = { getOneUnit };
