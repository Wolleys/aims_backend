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
const { requireParams } = require("../../../middlewares/checkParams");
const { validateSchema } = require("../../../middlewares/validateSchema");

//Import the required organization schemas
const { aircraftSchema } = require("../../../schemas/aircraftSchema");

//Required parameters for this route
const singleParam = ["organizationId"];
const multipleParams = ["organizationId", "aircraftId"];

//Aircraft routes
// 1. Get all aircrafts from a specific organization
router.get("/:organizationId", requireParams(singleParam), getAllAircrafts);

// 2. Get one aircraft from a specific organization by id
router.get(
    "/:organizationId/:aircraftId",
    requireParams(multipleParams),
    getOneAircraft
);

// 3. Create a new aircraft to a specific organization
router.post(
    "/:organizationId",
    requireParams(singleParam),
    validateSchema(aircraftSchema),
    createNewAircraft
);

// 4. Update one aircraft from a specific organization by id
router.patch("/:aircraftId", updateOneAircraft);

// 5. Delete one aircraft from a specific organization by id
router.delete("/:aircraftId", deleteOneAircraft);

module.exports = router;
