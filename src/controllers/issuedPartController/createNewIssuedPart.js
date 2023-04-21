const issuedPartService = require("../../services/issuedPartService");

const createNewIssuedPart = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;

    try {
        const createdIssuedPart = await issuedPartService.createNewIssuedPart(
            organizationId,
            body
        );
        res.status(201).send({ status: "OK", data: createdIssuedPart });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { createNewIssuedPart };
