const partService = require("../../services/partService");

const createNewPart = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    try {
        const createdPart = await partService.createNewPart(organizationId, body);
        res.status(201).send({ status: "OK", data: createdPart });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { createNewPart };
