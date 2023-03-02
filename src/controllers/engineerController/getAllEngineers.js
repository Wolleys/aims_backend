const engineerService = require("../../services/engineerService");

const getAllEngineers = async (req, res) => {
    const allEngineers = engineerService.getAllEngineers();
    res.send("Get all engineers");
};

module.exports = { getAllEngineers };
