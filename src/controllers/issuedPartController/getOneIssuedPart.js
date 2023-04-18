const issuedPartService = require("../../services/issuedPartService");

const getOneIssuedPart = async (req, res) => {
    const issuedPartId = req.params.issuedPartId;
    const organizationId = req.params.organizationId;

    const issuedPart = await issuedPartService.getOneIssuedPart(
        organizationId,
        issuedPartId
    );
    res.send("Get an existing issued part");
};

module.exports = { getOneIssuedPart };
