const express = require("express");
const router = express.Router();

//Import unit controllers
const {
    getOneUnit,
    getAllUnits,
    createNewUnit,
    updateOneUnit,
    deleteOneUnit,
} = require("../../../controllers/unitController");

//Import middlewares
const { verifyToken } = require("../../../middlewares/auth/jwt");
const { requireParams } = require("../../../middlewares/checkParams");
const { validateSchema } = require("../../../middlewares/validateSchema");

//Import the required unit schemas
const { unitSchema } = require("../../../schemas/unitSchema");

//Required parameters for this route
const singleParam = ["organizationId"];
const multipleParams = ["organizationId", "unitId"];

//Unit routes
// 1. Get all units from a specific organization
router.get(
    "/:organizationId",
    verifyToken,
    requireParams(singleParam),
    getAllUnits
);

// 2. Get one unit from a specific organization by id
router.get(
    "/:organizationId/:unitId",
    verifyToken,
    requireParams(multipleParams),
    getOneUnit
);

// 3. Create a new unit to a specific organization
router.post(
    "/:organizationId",
    verifyToken,
    requireParams(singleParam),
    validateSchema(unitSchema),
    createNewUnit
);

// 4. Update one unit from a specific organization by id
router.patch(
    "/:organizationId/:unitId",
    verifyToken,
    requireParams(multipleParams),
    validateSchema(unitSchema),
    updateOneUnit
);

// 5. Delete one unit from a specific organization by id
router.delete(
    "/:organizationId/:unitId",
    verifyToken,
    requireParams(multipleParams),
    deleteOneUnit
);

module.exports = router;
