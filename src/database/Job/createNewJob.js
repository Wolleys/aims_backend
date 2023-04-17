const { Job } = require("./jobModel");
const { Client } = require("../Client/clientModel");
const { findItem } = require("../helpers/findItem");
const { isAlreadyAdded } = require("../helpers/isAlreadyAdded");
const { checkOrganization } = require("../helpers/checkOrganization");

const createNewJob = async (organizationId, newJob) => {
    await checkOrganization(organizationId);

    const findClient = "a client";
    await findItem(Client, findClient, newJob.client_id, organizationId);

    // Check if job number already exists
    const jobNumCol = "job_number";
    const jobNumVal = newJob.job_number;
    const jobNumAttrs = ["job_number", "organization_id"];
    await isAlreadyAdded(Job, jobNumCol, jobNumVal, organizationId, jobNumAttrs);

    try {
        const createdJob = await Job().create(newJob);
        return createdJob;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { createNewJob };
