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

//All supplier routes
router.get("/", getAllSuppliers);
router.get("/:supplierId", getOneSupplier);
router.post("/:organizationId", createNewSupplier);
router.patch("/:supplierId", updateOneSupplier);
router.delete("/:supplierId", deleteOneSupplier);

module.exports = router;
