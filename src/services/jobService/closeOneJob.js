const Job = require("../../database/Job");

const closeOneJob = (organizationId, jobId) => {
    try {
        const job = Job.closeOneJob(organizationId, jobId);
        return job;
    } catch (error) {
        throw error;
    }
};

module.exports = { closeOneJob };
