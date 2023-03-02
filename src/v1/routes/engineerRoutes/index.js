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

//All engineer routes
router.get("/", getAllEngineers);
router.get("/:engineerId", getOneEngineer);
router.post("/", createNewEngineer);
router.patch("/:engineerId", updateOneEngineer);
router.delete("/:engineerId", deleteOneEngineer);

module.exports = router;
