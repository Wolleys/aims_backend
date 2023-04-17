const Job = require("../../database/Job");

const getAllJobs = (organizationId) => {
    try {
        const allJobs = Job.getAllJobs(organizationId);
        return allJobs;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllJobs };
