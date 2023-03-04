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
const { physicalAddress } = require("../../../schemas/addressSchema");
const { newOrganization } = require("../../../schemas/organizationSchemas/newOrganization");
const { updateOrganization } = require("../../../schemas/organizationSchemas/updateOrganization");

const validateAll = () => {
    const shemas = [validateSchema(newOrganization), validateSchema(physicalAddress)];
    return shemas;
};

//All organization routes
router.get("/", cache(), getAllOrganizations);
router.get("/:organizationId", cache(), getOneOrganization);
router.post("/", validateAll(), createNewOrganization);
router.patch("/:organizationId", validateSchema(updateOrganization), updateOneOrganization);
router.patch("/:organizationId/address", validateSchema(physicalAddress), updateOneAddress);
router.delete("/:organizationId", deleteOneOrganization);

module.exports = router;
