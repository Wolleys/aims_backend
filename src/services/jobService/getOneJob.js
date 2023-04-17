const Job = require("../../database/Job");

const getOneJob = (organizationId, jobId) => {
  try {
    const job = Job.getOneJob(organizationId, jobId);
    return job;
  } catch (error) {
    throw error;
  }
};

module.exports = { getOneJob };
