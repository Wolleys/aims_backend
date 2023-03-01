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

//All aircraft routes
router.get("/", getAllAircrafts);
router.get("/:aircraftId", getOneAircraft);
router.post("/", createNewAircraft);
router.patch("/:aircraftId", updateOneAircraft);
router.delete("/:aircraftId", deleteOneAircraft);

module.exports = router;
