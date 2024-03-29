const express = require("express");
const router = express.Router();

//Import aircraft controllers
const {
    getOneAircraft,
    getAllAircrafts,
    createNewAircraft,
    updateOneAircraft,
    deleteOneAircraft,
} = require("../../../controllers/aircraftController");

//Import middlewares
const { verifyToken } = require("../../../middlewares/auth/jwt");
const { requireParams } = require("../../../middlewares/checkParams");
const { validateSchema } = require("../../../middlewares/validateSchema");

//Import the required aircraft schemas
const { aircraftSchema } = require("../../../schemas/aircraftSchema");

//Required parameters for this route
const singleParam = ["organizationId"];
const multipleParams = ["organizationId", "aircraftId"];

//Aircraft routes
// 1. Get all aircrafts from a specific organization
router.get(
    "/:organizationId",
    verifyToken,
    requireParams(singleParam),
    getAllAircrafts
);

// 2. Get one aircraft from a specific organization by id
router.get(
    "/:organizationId/:aircraftId",
    verifyToken,
    requireParams(multipleParams),
    getOneAircraft
);

// 3. Create a new aircraft to a specific organization
router.post(
    "/:organizationId",
    verifyToken,
    requireParams(singleParam),
    validateSchema(aircraftSchema),
    createNewAircraft
);

// 4. Update one aircraft from a specific organization by id
router.patch(
    "/:organizationId/:aircraftId",
    verifyToken,
    requireParams(multipleParams),
    validateSchema(aircraftSchema),
    updateOneAircraft
);

// 5. Delete one aircraft from a specific organization by id
router.delete(
    "/:organizationId/:aircraftId",
    verifyToken,
    requireParams(multipleParams),
    deleteOneAircraft
);

module.exports = router;
