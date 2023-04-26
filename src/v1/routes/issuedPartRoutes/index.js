const express = require("express");
const router = express.Router();

//Import issued parts controllers
const {
    getOneIssuedPart,
    getAllIssuedParts,
    createNewIssuedPart,
    updateOneIssuedPart,
    deleteOneIssuedPart,
} = require("../../../controllers/issuedPartController");

//Import middlewares
const { requireParams } = require("../../../middlewares/checkParams");
const { validateSchema } = require("../../../middlewares/validateSchema");

//Import the required issued parts schemas
const { issuePartSchema } = require("../../../schemas/issuePartSchema");

//Required parameters for this route
const singleParam = ["organizationId"];
const multipleParams = ["organizationId", "issuedPartId"];

//Issued parts routes
// 1. Get all issued parts from a specific organization
router.get("/:organizationId", requireParams(singleParam), getAllIssuedParts);

// 2. Get one issued part from a specific organization by id
router.get(
    "/:organizationId/:issuedPartId",
    requireParams(multipleParams),
    getOneIssuedPart
);

// 3. Create a new issued part to a specific organization
router.post(
    "/:organizationId",
    requireParams(singleParam),
    validateSchema(issuePartSchema),
    createNewIssuedPart
);

// 4. Update one issued part from a specific organization by id
router.patch(
    "/:organizationId/:issuedPartId",
    requireParams(multipleParams),
    validateSchema(issuePartSchema),
    updateOneIssuedPart
);

// 5. Delete one issued part from a specific organization by id
router.delete(
    "/:organizationId/:issuedPartId",
    requireParams(multipleParams),
    deleteOneIssuedPart
);

module.exports = router;
