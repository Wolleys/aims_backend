const partService = require("../../services/partService");

const updateOnePart = async (req, res) => {
    const updatedPart = partService.updateOnePart();
    res.send("Update an existing part");
};

module.exports = { updateOnePart };
