const express = require("express");
const router = express.Router();

//Import job controllers
const {
    getOneJob,
    getAllJobs,
    createNewJob,
    updateOneJob,
    deleteOneJob,
} = require("../../../controllers/jobController");

//Job routes
// 1. Get all jobs from a specific organization
router.get("/:organizationId", getAllJobs);

// 2. Get one job from a specific organization by id
router.get("/:organizationId/:jobId", getOneJob);

// 3. Create a new job to a specific organization
router.post("/:organizationId", createNewJob);

// 4. Update one job from a specific organization by id
router.patch("/:organizationId/:jobId", updateOneJob);

// 5. Delete one job from a specific organization by id
router.delete("/:organizationId/:jobId", deleteOneJob);

module.exports = router;
