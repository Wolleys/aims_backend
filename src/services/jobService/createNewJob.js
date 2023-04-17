const Job = require("../../database/Job");

const createNewJob = (organizationId, newJob) => {
    const jobToInsert = {
        ...newJob,
        organization_id: organizationId,
        aircraft_id: newJob.aircraft_id,
    };

    try {
        const createdJob = Job.createNewJob(organizationId, jobToInsert);
        return createdJob;
    } catch (error) {
        throw error;
    }
};

module.exports = { createNewJob };
