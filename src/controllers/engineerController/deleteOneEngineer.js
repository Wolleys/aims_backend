const engineerService = require("../../services/engineerService");

const deleteOneEngineer = async (req, res) => {
    const deletedEngineer = engineerService.deleteOneEngineer();
    res.send("Delete an existing engineer");
};

module.exports = { deleteOneEngineer };
