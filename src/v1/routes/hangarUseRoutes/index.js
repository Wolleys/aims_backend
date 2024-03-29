const express = require("express");
const router = express.Router();

//Import hangar use controllers
const {
    getOneIssuedPart,
    getAllIssuedParts,
    createNewIssuedPart,
    updateOneIssuedPart,
    deleteOneIssuedPart,
} = require("../../../controllers/hangarUseController");

//Import middlewares
const { verifyToken } = require("../../../middlewares/auth/jwt");
const { requireParams } = require("../../../middlewares/checkParams");
const { validateSchema } = require("../../../middlewares/validateSchema");

//Import the required issued parts schemas
const { issuePartSchema } = require("../../../schemas/issuePartSchema");

//Required parameters for this route
const singleParam = ["organizationId"];
const multipleParams = ["organizationId", "issuedPartId"];

//Hangar use routes
// 1. Get all issued parts from an organization's hangar
router.get(
    "/:organizationId",
    verifyToken,
    requireParams(singleParam),
    getAllIssuedParts
);

// 2. Get one issued part from an organization's hangar by id
router.get(
    "/:organizationId/:issuedPartId",
    verifyToken,
    requireParams(multipleParams),
    getOneIssuedPart
);

// 3. Create a issued part use to an organization's hangar
router.post(
    "/:organizationId",
    verifyToken,
    requireParams(singleParam),
    validateSchema(issuePartSchema),
    createNewIssuedPart
);

// 4. Update one issued part from an organization's hangar by id
router.patch(
    "/:organizationId/:issuedPartId",
    verifyToken,
    requireParams(multipleParams),
    validateSchema(issuePartSchema),
    updateOneIssuedPart
);

// 5. Delete one issued part from an organization's hangar by id
router.delete(
    "/:organizationId/:issuedPartId",
    verifyToken,
    requireParams(multipleParams),
    deleteOneIssuedPart
);

module.exports = router;
