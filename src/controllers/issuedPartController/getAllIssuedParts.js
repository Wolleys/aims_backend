const issuedPartService = require("../../services/issuedPartService");

const getAllIssuedParts = async (req, res) => {
    const organizationId = req.params.organizationId;
    const issuedParts = await issuedPartService.getAllIssuedParts(organizationId);
    res.send("Get all issued parts");
};

module.exports = { getAllIssuedParts };
