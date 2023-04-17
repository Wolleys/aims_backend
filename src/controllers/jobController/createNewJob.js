const jobService = require("../../services/jobService");

const createNewJob = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    try {
        const createdJob = await jobService.createNewJob(organizationId, body);
        res.status(201).send({ status: "OK", data: createdJob });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { createNewJob };
