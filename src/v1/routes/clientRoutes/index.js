const express = require("express");
const router = express.Router();

//Import client controllers
const {
    getOneClient,
    getAllClients,
    createNewClient,
    updateOneClient,
    deleteOneClient,
} = require("../../../controllers/clientController");

//All client routes
router.get("/", getAllClients);
router.get("/:clientId", getOneClient);
router.post("/", createNewClient);
router.patch("/:clientId", updateOneClient);
router.delete("/:clientId", deleteOneClient);

module.exports = router;
