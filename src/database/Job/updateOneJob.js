const { Job } = require("./jobModel");
const { Client } = require("../Client/clientModel");
const { findItem } = require("../helpers/findItem");
const { checkOrganization } = require("../helpers/checkOrganization");

const updateOneJob = async (organizationId, jobId, changes) => {
    await checkOrganization(organizationId);

    const findJob = "a job";
    await findItem(Job, findJob, jobId, organizationId);

    const findClient = "a client";
    await findItem(Client, findClient, changes.client_id, organizationId);

    try {
        const updateJob = await Job().update(
            { ...changes },
            { where: { id: jobId, organization_id: organizationId } }
        );
        if (!updateJob) {
            throw {
                status: 400,
                message: `Error while updating a job with the id '${jobId}'`,
            };
        }
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneJob };
