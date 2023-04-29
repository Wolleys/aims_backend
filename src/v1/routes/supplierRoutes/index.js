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
const { updateOneAddress } = require("../../../controllers/supplierAddress");

//Import middlewares
const { verifyToken } = require("../../../middlewares/auth/jwt");
const { requireParams } = require("../../../middlewares/checkParams");
const { validateSchema } = require("../../../middlewares/validateSchema");

//Import the required supplier schemas
const { physicalAddress } = require("../../../schemas/addressSchema");
const { newSupplier } = require("../../../schemas/supplierSchemas/newSupplier");

// Validate all schemas before creating a new supplier
const validateAll = () => {
    const shemas = [validateSchema(newSupplier), validateSchema(physicalAddress)];
    return shemas;
};

//Required parameters for this route
const singleParam = ["organizationId"];
const multipleParams = ["organizationId", "supplierId"];

//Supplier routes
// 1. Get all suppliers from a specific organization
router.get(
    "/:organizationId",
    verifyToken,
    requireParams(singleParam),
    getAllSuppliers
);

// 2. Get one supplier from a specific organization by id
router.get(
    "/:organizationId/:supplierId",
    verifyToken,
    requireParams(multipleParams),
    getOneSupplier
);

// 3. Create a new supplier to a specific organization
router.post(
    "/:organizationId",
    verifyToken,
    requireParams(singleParam),
    validateAll(),
    createNewSupplier
);

// 4. Update one supplier from a specific organization by id
router.patch(
    "/:organizationId/:supplierId",
    verifyToken,
    requireParams(multipleParams),
    validateSchema(newSupplier),
    updateOneSupplier
);

// 5. Update one supplier address from a specific organization by id
router.patch(
    "/:organizationId/:supplierId/address",
    verifyToken,
    requireParams(multipleParams),
    validateSchema(physicalAddress),
    updateOneAddress
);

// 6. Delete one supplier from a specific organization by id
router.delete(
    "/:organizationId/:supplierId",
    verifyToken,
    requireParams(multipleParams),
    deleteOneSupplier
);

module.exports = router;
