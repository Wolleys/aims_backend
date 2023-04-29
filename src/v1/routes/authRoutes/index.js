const express = require("express");
const router = express.Router();

//Import aircraft controllers
const { login } = require("../../../controllers/authController");

//Import middlewares
const { validateSchema } = require("../../../middlewares/validateSchema");

//Import the required auth schemas
const { authSchema } = require("../../../schemas/authSchema");

//Auth routes
// 1. Login user to their account
router.post("/login", validateSchema(authSchema), login);

module.exports = router;
