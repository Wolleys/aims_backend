const Job = require("../../database/Job");

const updateOneJob = (organizationId, jobId, changes) => {
    try {
        const job = Job.updateOneJob(organizationId, jobId, changes);
        return job;
    } catch (error) {
        throw error;
    }
};

module.exports = { updateOneJob };
