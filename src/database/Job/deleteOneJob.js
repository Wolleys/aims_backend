const { Job } = require("./jobModel");
const { deleteItem } = require("../helpers/deleteItem");
const { checkOrganization } = require("../helpers/checkOrganization");

const deleteOneJob = async (organizationId, jobId) => {
    await checkOrganization(organizationId);

    try {
        const itemToFind = "a job";
        await deleteItem(Job, itemToFind, jobId, organizationId);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { deleteOneJob };
