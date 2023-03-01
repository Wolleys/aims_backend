const express = require("express");
const router = express.Router();

//Import parts controllers
const {
    getOnePart,
    getAllParts,
    createNewPart,
    updateOnePart,
    deleteOnePart,
} = require("../../../controllers/partController");

//All part routes
router.get("/", getAllParts);
router.get("/:partId", getOnePart);
router.post("/", createNewPart);
router.patch("/:partId", updateOnePart);
router.delete("/:partId", deleteOnePart);

module.exports = router;
