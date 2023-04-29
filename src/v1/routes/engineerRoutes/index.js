const express = require("express");
const router = express.Router();

//Import engineer controllers
const {
    getOneEngineer,
    getAllEngineers,
    createNewEngineer,
    updateOneEngineer,
    deleteOneEngineer,
} = require("../../../controllers/engineerController");

//Import middlewares
const { verifyToken } = require("../../../middlewares/auth/jwt");
const { requireParams } = require("../../../middlewares/checkParams");
const { validateSchema } = require("../../../middlewares/validateSchema");

//Import the required user schemas
const { engineerSchema } = require("../../../schemas/engineerSchema");

//Required parameters for this route
const singleParam = ["organizationId"];
const multipleParams = ["organizationId", "engineerId"];

//Engineer routes
// 1. Get all engineers from a specific organization
router.get(
    "/:organizationId",
    verifyToken,
    requireParams(singleParam),
    getAllEngineers
);

// 2. Get one engineer from a specific organization by id
router.get(
    "/:organizationId/:engineerId",
    verifyToken,
    requireParams(multipleParams),
    getOneEngineer
);

// 3. Create a new engineer to a specific organization
router.post(
    "/:organizationId",
    verifyToken,
    requireParams(singleParam),
    validateSchema(engineerSchema),
    createNewEngineer
);

// 4. Update one engineer from a specific organization by id
router.patch(
    "/:organizationId/:engineerId",
    verifyToken,
    requireParams(multipleParams),
    validateSchema(engineerSchema),
    updateOneEngineer
);

// 5. Delete one engineer from a specific organization by id
router.delete(
    "/:organizationId/:engineerId",
    verifyToken,
    requireParams(multipleParams),
    deleteOneEngineer
);

module.exports = router;
