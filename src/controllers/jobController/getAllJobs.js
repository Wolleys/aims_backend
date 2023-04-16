const jobService = require("../../services/jobService");

const getAllJobs = async (req, res) => {
    const organizationId = req.params.organizationId;
    const allJobs = await jobService.getAllJobs(organizationId);
    res.send("Get all jobs");
};

module.exports = { getAllJobs };
