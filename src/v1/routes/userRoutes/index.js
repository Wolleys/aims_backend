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
const { requireParams } = require("../../../middlewares/checkParams");
const { validateSchema } = require("../../../middlewares/validateSchema");

//Import the required user schemas
const { userSchema } = require("../../../schemas/userSchema");

//Required parameters for this route
const singleParam = ["organizationId"];
const multipleParams = ["organizationId", "userId"];

//User routes
// 1. Get all users from a specific organization
router.get("/:organizationId", requireParams(singleParam), getAllUsers);

// 2. Get one user from a specific organization by id
router.get(
    "/:organizationId/:userId",
    requireParams(multipleParams),
    getOneUser
);

// 3. Create a new user to a specific organization
router.post(
    "/:organizationId",
    requireParams(singleParam),
    validateSchema(userSchema),
    createNewUser
);

// 4. Update one user from a specific organization by id
router.patch(
    "/:organizationId/:userId",
    requireParams(multipleParams),
    validateSchema(userSchema),
    updateOneUser
);

// 5. Delete one user from a specific organization by id
router.delete(
    "/:organizationId/:userId",
    requireParams(multipleParams),
    deleteOneUser
);

module.exports = router;
