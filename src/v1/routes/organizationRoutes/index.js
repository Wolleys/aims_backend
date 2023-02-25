const express = require("express");
const router = express.Router();

const {
    getOneOrganization,
    getAllOrganizations,
    createNewOrganization,
    updateOneOrganization,
    deleteOneOrganization,
} = require("../../../controllers/organizationController");

const {
    newOrganization,
} = require("../../../schemas/organizationSchemas/newOrganization");
const {
    updateOrganization,
} = require("../../../schemas/organizationSchemas/updateOrganization");
const { validateSchema } = require("../../../middlewares/validateSchema");

//Routes
router.get("/", getAllOrganizations);
router.get("/:organizationId", getOneOrganization);
router.post("/", validateSchema(newOrganization), createNewOrganization);
router.patch(
    "/:organizationId",
    validateSchema(updateOrganization),
    updateOneOrganization
);
router.delete("/:organizationId", deleteOneOrganization);

module.exports = router;
