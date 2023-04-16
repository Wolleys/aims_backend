const jobService = require("../../services/jobService");

const updateOneJob = async (req, res) => {
    const body = req.body;
    const jobId = req.params.jobId;
    const organizationId = req.params.organizationId;
    await jobService.updateOneJob(organizationId, jobId, body);
    res.send("Update an existing workout");
};

module.exports = { updateOneJob };
