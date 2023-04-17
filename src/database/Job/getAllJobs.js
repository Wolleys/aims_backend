const { Job } = require("./jobModel");
const { Client } = require("../Client/clientModel");
const { Aircraft } = require("../Aircraft/aircraftModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const getAllJobs = async (organizationId) => {
  await checkOrganization(organizationId);

  try {
    const allAircrafts = await Job().findAndCountAll({
      where: { organization_id: organizationId },
      order: [["created_at", "DESC"]],
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
    return allAircrafts;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

module.exports = { getAllJobs };
