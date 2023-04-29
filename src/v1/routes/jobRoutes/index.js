const express = require("express");
const router = express.Router();

//Import job controllers
const {
    getOneJob,
    getAllJobs,
    closeOneJob,
    createNewJob,
    updateOneJob,
    deleteOneJob,
} = require("../../../controllers/jobController");

//Import middlewares
const { verifyToken } = require("../../../middlewares/auth/jwt");
const { requireParams } = require("../../../middlewares/checkParams");
const { validateSchema } = require("../../../middlewares/validateSchema");

//Import the required job schemas
const { jobSchema } = require("../../../schemas/jobSchema");

//Required parameters for this route
const singleParam = ["organizationId"];
const multipleParams = ["organizationId", "jobId"];

//Job routes
// 1. Get all jobs from a specific organization
router.get(
    "/:organizationId",
    verifyToken,
    requireParams(singleParam),
    getAllJobs
);

// 2. Get one job from a specific organization by id
router.get(
    "/:organizationId/:jobId",
    verifyToken,
    requireParams(multipleParams),
    getOneJob
);

// 3. Create a new job to a specific organization
router.post(
    "/:organizationId",
    verifyToken,
    requireParams(singleParam),
    validateSchema(jobSchema),
    createNewJob
);

// 4. Update one job from a specific organization by id
router.put(
    "/:organizationId/:jobId",
    verifyToken,
    requireParams(multipleParams),
    validateSchema(jobSchema),
    updateOneJob
);

// 5. Delete one job from a specific organization by id
router.delete(
    "/:organizationId/:jobId",
    verifyToken,
    requireParams(multipleParams),
    deleteOneJob
);

// 6. Close one job from a specific organization by id
router.patch(
    "/:organizationId/:jobId",
    verifyToken,
    requireParams(multipleParams),
    closeOneJob
);

module.exports = router;
