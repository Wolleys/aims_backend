const express = require("express");
const router = express.Router();

//Import user controllers
const {
    getOneUser,
    getAllUsers,
    createNewUser,
    updateOneUser,
    deleteOneUser,
} = require("../../../controllers/userController");

//All user routes
router.get("/", getAllUsers);
router.get("/:userId", getOneUser);
router.post("/", createNewUser);
router.patch("/:userId", updateOneUser);
router.delete("/:userId", deleteOneUser);

module.exports = router;
