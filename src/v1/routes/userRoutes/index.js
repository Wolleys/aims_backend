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

//Import middlewares
const { verifyToken } = require("../../../middlewares/auth/jwt");
const { requireParams } = require("../../../middlewares/checkParams");
const { validateSchema } = require("../../../middlewares/validateSchema");

//Import the required user schemas
const { userSchema } = require("../../../schemas/userSchema");

//Required parameters for this route
const singleParam = ["organizationId"];
const multipleParams = ["organizationId", "userId"];

//User routes
// 1. Get all users from a specific organization
router.get(
    "/:organizationId",
    verifyToken,
    requireParams(singleParam),
    getAllUsers
);

// 2. Get one user from a specific organization by id
router.get(
    "/:organizationId/:userId",
    verifyToken,
    requireParams(multipleParams),
    getOneUser
);

// 3. Create a new user to a specific organization
router.post(
    "/:organizationId",
    verifyToken,
    requireParams(singleParam),
    validateSchema(userSchema),
    createNewUser
);

// 4. Update one user from a specific organization by id
router.patch(
    "/:organizationId/:userId",
    verifyToken,
    requireParams(multipleParams),
    validateSchema(userSchema),
    updateOneUser
);

// 5. Delete one user from a specific organization by id
router.delete(
    "/:organizationId/:userId",
    verifyToken,
    requireParams(multipleParams),
    deleteOneUser
);

module.exports = router;
