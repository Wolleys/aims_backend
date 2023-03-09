const unitService = require("../../services/unitService");

const createNewUnit = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    try {
        const createdUnit = await unitService.createNewUnit(organizationId, body);
        res.status(201).send({ status: "OK", data: createdUnit });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { createNewUnit };
