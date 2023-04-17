const jobService = require("../../services/jobService");

const getAllJobs = async (req, res) => {
    const organizationId = req.params.organizationId;
    try {
        const allJobs = await jobService.getAllJobs(organizationId);
        res.send({ status: "OK", data: allJobs });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getAllJobs };
