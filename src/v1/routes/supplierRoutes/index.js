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
const { validateSchema } = require("../../../middlewares/validateSchema");

//Import the required organization schemas
const { physicalAddress } = require("../../../schemas/addressSchema");
const { newSupplier } = require("../../../schemas/supplierSchemas/newSupplier");

// Validate all schemas before creating a new supplier
const validateAll = () => {
    const shemas = [validateSchema(newSupplier), validateSchema(physicalAddress)];
    return shemas;
};

//All supplier routes
router.get("/:organizationId", getAllSuppliers);
router.get("/:supplierId", getOneSupplier);
router.post("/:organizationId", validateAll(), createNewSupplier);
router.patch("/:supplierId", updateOneSupplier);
router.delete("/:supplierId", deleteOneSupplier);

module.exports = router;
