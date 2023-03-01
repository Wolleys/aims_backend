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

//All unit routes
router.get("/", getAllUnits);
router.get("/:unitId", getOneUnit);
router.post("/", createNewUnit);
router.patch("/:unitId", updateOneUnit);
router.delete("/:unitId", deleteOneUnit);

module.exports = router;
