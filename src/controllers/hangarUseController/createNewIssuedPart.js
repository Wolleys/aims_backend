const hangarUseService = require("../../services/hangarUseService");

const createNewIssuedPart = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;

    const createdIssuedPart = await hangarUseService.createNewIssuedPart(
        organizationId,
        body
    );
    res.send("Create a new issued part");
};

module.exports = { createNewIssuedPart };
