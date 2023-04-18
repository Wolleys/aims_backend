const issuedPartService = require("../../services/issuedPartService");

const createNewIssuedPart = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    const createdIssuedPart = await issuedPartService.createNewIssuedPart(
        organizationId,
        body
    );
    res.send("Create a new issued part");
};

module.exports = { createNewIssuedPart };
