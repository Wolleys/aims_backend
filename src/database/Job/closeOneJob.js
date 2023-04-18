const { Job } = require("./jobModel");
const { sequelize } = require("../dbConfig");
const { checkOrganization } = require("../helpers/checkOrganization");

const closeOneJob = async (organizationId, jobId) => {
    await checkOrganization(organizationId);

    const job = await Job().findOne({
        where: { id: jobId, organization_id: organizationId },
        attributes: ["id", "organization_id", "job_status"],
    });

    if (!job) {
        throw {
            status: 400,
            message: `Can't find a job with the id '${jobId}'`,
        };
    }

    if (job.job_status === "Closed") {
        throw {
            status: 400,
            message: "Job is already closed",
        };
    }

    const closeJob = {
        job_status: "Closed",
        date_closed: sequelize.fn("NOW"),
    };

    try {
        const updateJob = await Job().update(
            { ...closeJob },
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

module.exports = { closeOneJob };
