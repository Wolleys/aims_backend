const jobService = require("../../services/jobService");

const updateOneJob = async (req, res) => {
    const body = req.body;
    const jobId = req.params.jobId;
    const organizationId = req.params.organizationId;
    try {
        await jobService.updateOneJob(organizationId, jobId, body);
        res.send({ status: "OK", message: "Record updated successfully." });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { updateOneJob };
