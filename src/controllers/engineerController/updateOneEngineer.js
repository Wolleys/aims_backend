const engineerService = require("../../services/engineerService");

const updateOneEngineer = async (req, res) => {
    const updatedEngineer = engineerService.updateOneEngineer();
    res.send("Update an existing engineer");
};

module.exports = { updateOneEngineer };
