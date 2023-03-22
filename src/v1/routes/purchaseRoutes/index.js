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

//Purchase routes
// 1. Get all purchases from a specific organization
router.get("/:organizationId", getAllPurchases);

// 2. Get one purchase from a specific organization by id
router.get("/:organizationId/:purchaseId", getOnePurchase);

// 3. Create a new purchase to a specific organization
router.post("/:organizationId", createNewPurchase);

// 4. Update one purchase from a specific organization by id
router.patch("/:organizationId/:purchaseId", updateOnePurchase);

// 5. Delete one purchase from a specific organization by id
router.delete("/:organizationId/:purchaseId", deleteOnePurchase);

module.exports = router;
