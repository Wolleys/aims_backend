const engineerService = require("../../services/engineerService");

const createNewEngineer = async (req, res) => {
    const createdEngineer = engineerService.createNewEngineer();
    res.send("Create a new engineer");
};

module.exports = { createNewEngineer };
