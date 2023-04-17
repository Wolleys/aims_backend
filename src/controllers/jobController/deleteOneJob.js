const jobService = require("../../services/jobService");

const deleteOneJob = async (req, res) => {
    const jobId = req.params.jobId;
    const organizationId = req.params.organizationId;
    try {
        await jobService.deleteOneJob(organizationId, jobId);
        res
            .status(200)
            .json({ status: "OK", message: "Record deleted successfully." });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { deleteOneJob };
