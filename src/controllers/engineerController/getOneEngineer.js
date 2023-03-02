const engineerService = require("../../services/engineerService");

const getOneEngineer = async (req, res) => {
    const engineer = engineerService.getOneEngineer();
    res.send("Get an existing engineer");
};

module.exports = { getOneEngineer };
