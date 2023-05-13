const express = require("express");
const router = express.Router();

//Import organization controllers
const {
    getOneOrganization,
    getAllOrganizations,
    createNewOrganization,
    updateOneOrganization,
    deleteOneOrganization,
} = require("../../../controllers/organizationController");
const {
    updateOneAddress,
} = require("../../../controllers/organizationAddress");

//Import middlewares
const { cache } = require("../../../middlewares/cache");
const { verifyToken } = require("../../../middlewares/auth/jwt");
const { verifyRoles } = require("../../../middlewares/auth/roles");
const { requireParams } = require("../../../middlewares/checkParams");
const { validateSchema } = require("../../../middlewares/validateSchema");

//Import the required organization schemas
const { physicalAddress } = require("../../../schemas/addressSchema");
const {
    newOrganization,
} = require("../../../schemas/organizationSchemas/newOrganization");
const {
    updateOrganization,
} = require("../../../schemas/organizationSchemas/updateOrganization");

// Validate all schemas before creating a new organization
const validateAll = () => {
    const shemas = [
        validateSchema(newOrganization),
        validateSchema(physicalAddress),
    ];
    return shemas;
};

//Required parameter for this route
const singleParam = ["organizationId"];

//Organization routes
// 1. Get all organizations
router.get("/", verifyToken, verifyRoles, getAllOrganizations);

// 2. Get one organization by id
router.get(
    "/:organizationId",
    verifyToken,
    verifyRoles,
    requireParams(singleParam),
    getOneOrganization
);

// 3. Create a new organization
router.post("/", validateAll(), createNewOrganization);

// 4. Update one organization by id
router.patch(
    "/:organizationId",
    verifyToken,
    verifyRoles,
    requireParams(singleParam),
    validateSchema(updateOrganization),
    updateOneOrganization
);

// 5. Update one organization address by id
router.patch(
    "/:organizationId/address",
    verifyToken,
    verifyRoles,
    requireParams(singleParam),
    validateSchema(physicalAddress),
    updateOneAddress
);

// 6. Delete one organization by id
router.delete(
    "/:organizationId",
    verifyToken,
    verifyRoles,
    requireParams(singleParam),
    deleteOneOrganization
);

module.exports = router;
