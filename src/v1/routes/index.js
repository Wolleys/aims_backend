const express = require("express");
const router = express.Router();

// Import route handlers
const v1JobRouter = require("./jobRoutes");
const v1AuthRouter = require("./authRoutes");
const v1UserRouter = require("./userRoutes");
const v1UnitRouter = require("./unitRoutes");
const v1PartRouter = require("./partRoutes");
const v1ClientRouter = require("./clientRoutes");
const v1SupplierRouter = require("./supplierRoutes");
const v1AircraftRouter = require("./aircraftRoutes");
const v1EngineerRouter = require("./engineerRoutes");
const v1PurchaseRouter = require("./purchaseRoutes");
const v1HangarUseRouter = require("./hangarUseRoutes");
const v1IssuedPartRouter = require("./issuedPartRoutes");
const v1OrganizationRouter = require("./organizationRoutes");

// Use route handlers
router.use("/api/v1/jobs", v1JobRouter);
router.use("/api/v1/auth", v1AuthRouter);
router.use("/api/v1/users", v1UserRouter);
router.use("/api/v1/units", v1UnitRouter);
router.use("/api/v1/parts", v1PartRouter);
router.use("/api/v1/clients", v1ClientRouter);
router.use("/api/v1/suppliers", v1SupplierRouter);
router.use("/api/v1/aircrafts", v1AircraftRouter);
router.use("/api/v1/engineers", v1EngineerRouter);
router.use("/api/v1/purchases", v1PurchaseRouter);
router.use("/api/v1/hangar-use", v1HangarUseRouter);
router.use("/api/v1/issued-parts", v1IssuedPartRouter);
router.use("/api/v1/organizations", v1OrganizationRouter);

module.exports = router;
