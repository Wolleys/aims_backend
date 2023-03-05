const express = require("express");
const router = express.Router();

//Import supplier controllers
const {
    getOneSupplier,
    getAllSuppliers,
    createNewSupplier,
    updateOneSupplier,
    deleteOneSupplier,
} = require("../../../controllers/supplierController");

//Import middlewares
const { requireParams } = require("../../../middlewares/checkParams");
const { validateSchema } = require("../../../middlewares/validateSchema");

//Import the required organization schemas
const { physicalAddress } = require("../../../schemas/addressSchema");
const { newSupplier } = require("../../../schemas/supplierSchemas/newSupplier");

// Validate all schemas before creating a new supplier
const validateAll = () => {
    const shemas = [validateSchema(newSupplier), validateSchema(physicalAddress)];
    return shemas;
};

//Required parameters for this route
const multipleParams = ["organizationId", "supplierId"];

//All supplier routes
router.get("/:organizationId", getAllSuppliers);
router.get("/:organizationId/:supplierId", getOneSupplier);
router.post("/:organizationId", validateAll(), createNewSupplier);
router.patch("/:organizationId/:supplierId", validateSchema(newSupplier), updateOneSupplier);
router.delete("/:organizationId/:supplierId", requireParams(multipleParams), deleteOneSupplier);

module.exports = router;
