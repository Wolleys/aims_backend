const jobService = require("../../services/jobService");

const deleteOneJob = async (req, res) => {
    const jobId = req.params.jobId;
    const organizationId = req.params.organizationId;
    await jobService.deleteOneJob(organizationId, jobId);
    res.send("Delete an existing job");
};

module.exports = { deleteOneJob };
