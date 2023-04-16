const jobService = require("../../services/jobService");

const getOneJob = async (req, res) => {
    const jobId = req.params.jobId;
    const organizationId = req.params.organizationId;
    const job = jobService.getOneJob(organizationId, jobId);
    res.send("Get an existing job");
};

module.exports = { getOneJob };
