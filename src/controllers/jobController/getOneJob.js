const jobService = require("../../services/jobService");

const getOneJob = async (req, res) => {
    const jobId = req.params.jobId;
    const organizationId = req.params.organizationId;
    try {
        const job = await jobService.getOneJob(organizationId, jobId);
        res.send({ status: "OK", data: job });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getOneJob };
