const { Job } = require("./jobModel");
const { Client } = require("../Client/clientModel");
const { Aircraft } = require("../Aircraft/aircraftModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const getOneJob = async (organizationId, jobId) => {
  await checkOrganization(organizationId);

  try {
    const job = await Job().findOne({
      where: { id: jobId, organization_id: organizationId },
      attributes: [
        "id",
        "date_opened",
        "job_number",
        "job_status",
        "date_closed",
      ],
      include: [
        {
          model: Aircraft(),
          attributes: ["id", "aircraft_reg", "aircraft_type"],
          include: [
            {
              model: Client(),
              attributes: ["id", "first_name", "last_name"],
            },
          ],
        },
      ],
    });
    if (!job) {
      throw {
        status: 404,
        message: `Can't find a job with the id '${jobId}'`,
      };
    }
    return job;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = { getOneJob };
