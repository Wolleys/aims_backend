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

//Import middlewares
const { verifyToken } = require("../../../middlewares/auth/jwt");
const { requireParams } = require("../../../middlewares/checkParams");
const { validateSchema } = require("../../../middlewares/validateSchema");

//Import the required part schemas
const { partSchema } = require("../../../schemas/partSchema");
const { priceSchema } = require("../../../schemas/priceSchema");
const { quantitySchema } = require("../../../schemas/quantitySchema");

// Validate all schemas before creating a new part
const validateAll = () => {
    const shemas = [
        validateSchema(partSchema),
        validateSchema(priceSchema),
        validateSchema(quantitySchema),
    ];
    return shemas;
};

//Required parameters for this route
const singleParam = ["organizationId"];
const multipleParams = ["organizationId", "partId"];

//Part routes
// 1. Get all parts from a specific organization
router.get(
    "/:organizationId",
    verifyToken,
    requireParams(singleParam),
    getAllParts
);

// 2. Get one part from a specific organization by id
router.get(
    "/:organizationId/:partId",
    verifyToken,
    requireParams(multipleParams),
    getOnePart
);

// 3. Create a new part to a specific organization
router.post(
    "/:organizationId",
    verifyToken,
    requireParams(singleParam),
    validateAll(),
    createNewPart
);

// 4. Update one part from a specific organization by id
router.patch(
    "/:organizationId/:partId",
    verifyToken,
    requireParams(multipleParams),
    validateAll(),
    updateOnePart
);

// 5. Delete one part from a specific organization by id
router.delete(
    "/:organizationId/:partId",
    verifyToken,
    requireParams(multipleParams),
    deleteOnePart
);

module.exports = router;
