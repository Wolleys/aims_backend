const partService = require("../../services/partService");

const deleteOnePart = async (req, res) => {
    const deletedPart = partService.deleteOnePart();
    res.send("Delete an existing part");
};

module.exports = { deleteOnePart };
