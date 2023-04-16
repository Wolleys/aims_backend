const { getOneJob } = require("./getOneJob");
const { getAllJobs } = require("./getAllJobs");
const { createNewJob } = require("./createNewJob");
const { updateOneJob } = require("./updateOneJob");
const { deleteOneJob } = require("./deleteOneJob");

module.exports = {
    getOneJob,
    getAllJobs,
    createNewJob,
    updateOneJob,
    deleteOneJob,
};
