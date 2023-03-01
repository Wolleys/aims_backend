const partService = require("../../services/partService");

const getOnePart = async (req, res) => {
    const part = partService.getOnePart();
    res.send("Get an existing part");
};

module.exports = { getOnePart };
