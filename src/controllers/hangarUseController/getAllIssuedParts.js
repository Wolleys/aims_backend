const hangarUseService = require("../../services/hangarUseService");

const getAllIssuedParts = async (req, res) => {
    const organizationId = req.params.organizationId;

    const allIssuedParts = await hangarUseService.getAllIssuedParts(
        organizationId
    );
    res.send("Get all issued parts");
};

module.exports = { getAllIssuedParts };
