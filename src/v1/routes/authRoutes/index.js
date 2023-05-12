const express = require("express");
const router = express.Router();

//Import aircraft controllers
const {
    login,
    logout,
    refreshToken,
} = require("../../../controllers/authController");

//Import middlewares
const { validateSchema } = require("../../../middlewares/validateSchema");

//Import the required auth schemas
const { authSchema } = require("../../../schemas/authSchema");

//Auth routes
// 1. Login user to their account
router.post("/login", validateSchema(authSchema), login);

// 2. Refresh user token
router.get("/refresh", refreshToken);

// 3. Logout user from their account
router.get("/logout", logout);

module.exports = router;
