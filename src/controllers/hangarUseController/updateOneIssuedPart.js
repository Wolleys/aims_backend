const hangarUseService = require("../../services/hangarUseService");

const updateOneIssuedPart = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    const issuedPartId = req.params.issuedPartId;

    await hangarUseService.updateOneIssuedPart(
        organizationId,
        issuedPartId,
        body
    );
    res.send("Update an existing issued part");
};

module.exports = { updateOneIssuedPart };
