const engineerService = require("../../services/engineerService");

const createNewEngineer = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    try {
        const createdEngineer = await engineerService.createNewEngineer(
            organizationId,
            body
        );
        res.status(201).send({ status: "OK", data: createdEngineer });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { createNewEngineer };
