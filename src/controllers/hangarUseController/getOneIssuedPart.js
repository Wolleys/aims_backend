const hangarUseService = require("../../services/hangarUseService");

const getOneIssuedPart = async (req, res) => {
    const issuedPartId = req.params.issuedPartId;
    const organizationId = req.params.organizationId;

    const issuedPart = await hangarUseService.getOneIssuedPart(
        organizationId,
        issuedPartId
    );
    res.send("Get one issued part");
};

module.exports = { getOneIssuedPart };
