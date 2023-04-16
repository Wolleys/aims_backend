const jobService = require("../../services/jobService");

const createNewJob = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    const createdJob = await jobService.createNewJob(organizationId, body);
    res.send("Create a new job");
};

module.exports = { createNewJob };
