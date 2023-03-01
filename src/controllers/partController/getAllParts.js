const partService = require("../../services/partService");

const getAllParts = async (req, res) => {
    const allParts = partService.getAllParts();
    res.send("Get all parts");
};

module.exports = { getAllParts };
