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

//Hangar use routes
// 1. Get all issued parts from an organization's hangar
router.get("/:organizationId", getAllIssuedParts);

// 2. Get one issued part from an organization's hangar by id
router.get("/:organizationId/:issuedPartId", getOneIssuedPart);

// 3. Create a issued part use to an organization's hangar
router.post("/:organizationId", createNewIssuedPart);

// 4. Update one issued part from an organization's hangar by id
router.patch("/:organizationId/:issuedPartId", updateOneIssuedPart);

// 5. Delete one issued part from an organization's hangar by id
router.delete("/:organizationId/:issuedPartId", deleteOneIssuedPart);

module.exports = router;
