const { getOneJob } = require("./getOneJob");
const { getAllJobs } = require("./getAllJobs");
const { closeOneJob } = require("./closeOneJob");
const { createNewJob } = require("./createNewJob");
const { updateOneJob } = require("./updateOneJob");
const { deleteOneJob } = require("./deleteOneJob");

module.exports = {
    getOneJob,
    getAllJobs,
    closeOneJob,
    createNewJob,
    updateOneJob,
    deleteOneJob,
};
