const Job = require("../../database/Job");

const deleteOneJob = (organizationId, jobId) => {
    try {
        const job = Job.deleteOneJob(organizationId, jobId);
        return job;
    } catch (error) {
        throw error;
    }
};

module.exports = { deleteOneJob };
