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

//Issued parts routes
// 1. Get all issued parts from a specific organization
router.get("/:organizationId", getAllIssuedParts);

// 2. Get one issued part from a specific organization by id
router.get("/:organizationId/:issuedPartId", getOneIssuedPart);

// 3. Create a new issued part to a specific organization
router.post("/:organizationId", createNewIssuedPart);

// 4. Update one issued part from a specific organization by id
router.patch("/:organizationId/:issuedPartId", updateOneIssuedPart);

// 5. Delete one issued part from a specific organization by id
router.delete("/:organizationId/:issuedPartId", deleteOneIssuedPart);

module.exports = router;
