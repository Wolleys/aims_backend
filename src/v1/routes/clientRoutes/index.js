const express = require("express");
const router = express.Router();

//Import client controllers
const {
    getOneClient,
    getAllClients,
    createNewClient,
    updateOneClient,
    deleteOneClient,
} = require("../../../controllers/clientController");

//Import middlewares
const { requireParams } = require("../../../middlewares/checkParams");
const { validateSchema } = require("../../../middlewares/validateSchema");

//Import the required organization schemas
const { physicalAddress } = require("../../../schemas/addressSchema");
const { newClient } = require("../../../schemas/clientSchema/newClient");

// Validate all schemas before creating a new client
const validateAll = () => {
    const shemas = [validateSchema(newClient), validateSchema(physicalAddress)];
    return shemas;
};

//Required parameters for this route
const singleParam = ["organizationId"];
const multipleParams = ["organizationId", "clientId"];

//Client routes
// 1. Get all clients from a specific organization
router.get("/:organizationId", requireParams(singleParam), getAllClients);

// 2. Get one client from a specific organization by id
router.get(
    "/:organizationId/:clientId",
    requireParams(multipleParams),
    getOneClient
);

// 3. Create a new client to a specific organization
router.post(
    "/:organizationId",
    requireParams(singleParam),
    validateAll(),
    createNewClient
);

// 4. Update one client from a specific organization by id
router.patch(
    "/:organizationId/:clientId",
    requireParams(multipleParams),
    validateSchema(newClient),
    updateOneClient
);

// 5. Delete one client from a specific organization by id
router.delete(
    "/:organizationId/:clientId",
    requireParams(multipleParams),
    deleteOneClient
);

module.exports = router;
