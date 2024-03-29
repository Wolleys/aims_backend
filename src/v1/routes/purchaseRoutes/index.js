const express = require("express");
const router = express.Router();

//Import purchases controllers
const {
    getOnePurchase,
    getAllPurchases,
    createNewPurchase,
    updateOnePurchase,
    deleteOnePurchase,
} = require("../../../controllers/purchaseController");

//Import middlewares
const { verifyToken } = require("../../../middlewares/auth/jwt");
const { requireParams } = require("../../../middlewares/checkParams");
const { validateSchema } = require("../../../middlewares/validateSchema");

//Import the required purchase schemas
const { purchaseSchema } = require("../../../schemas/purchaseSchema");

//Required parameters for this route
const singleParam = ["organizationId"];
const createParams = ["organizationId", "partId"];
const multipleParams = ["organizationId", "purchaseId"];

//Purchase routes
// 1. Get all purchases from a specific organization
router.get(
    "/:organizationId",
    verifyToken,
    requireParams(singleParam),
    getAllPurchases
);

// 2. Get one purchase from a specific organization by id
router.get(
    "/:organizationId/:purchaseId",
    verifyToken,
    requireParams(multipleParams),
    getOnePurchase
);

// 3. Create a new purchase to a specific organization's part
router.post(
    "/:organizationId/:partId",
    verifyToken,
    requireParams(createParams),
    validateSchema(purchaseSchema),
    createNewPurchase
);

// 4. Update one purchase from a specific organization by id
router.patch(
    "/:organizationId/:purchaseId",
    verifyToken,
    requireParams(multipleParams),
    validateSchema(purchaseSchema),
    updateOnePurchase
);

// 5. Delete one purchase from a specific organization by id
router.delete(
    "/:organizationId/:purchaseId",
    verifyToken,
    requireParams(multipleParams),
    deleteOnePurchase
);

module.exports = router;
