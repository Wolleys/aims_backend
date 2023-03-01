const partService = require("../../services/partService");

const createNewPart = async (req, res) => {
    const createdPart = partService.createNewPart();
    res.send("Create a new part");
};

module.exports = { createNewPart };
