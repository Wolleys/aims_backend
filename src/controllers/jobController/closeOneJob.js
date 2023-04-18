const jobService = require("../../services/jobService");

const closeOneJob = async (req, res) => {
    const jobId = req.params.jobId;
    const organizationId = req.params.organizationId;
    try {
        await jobService.closeOneJob(organizationId, jobId);
        res.send({ status: "OK", message: "Job closed successfully." });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { closeOneJob };
