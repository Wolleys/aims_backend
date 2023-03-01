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
const { updateOneAddress } = require("../../../controllers/organizationAddress");

//Import middlewares
const { cache } = require("../../../middlewares/cache");
const { validateSchema } = require("../../../middlewares/validateSchema");

//Import the required organization schemas
const { updateAddress } = require("../../../schemas/organizationSchemas/updateAddress");
const { newOrganization } = require("../../../schemas/organizationSchemas/newOrganization");
const { updateOrganization } = require("../../../schemas/organizationSchemas/updateOrganization");

//All organization routes
router.get("/", cache(), getAllOrganizations);
router.get("/:organizationId", cache(), getOneOrganization);
router.post("/", validateSchema(newOrganization), createNewOrganization);
router.patch("/:organizationId", validateSchema(updateOrganization), updateOneOrganization);
router.patch("/:organizationId/address", validateSchema(updateAddress), updateOneAddress);
router.delete("/:organizationId", deleteOneOrganization);

module.exports = router;
