const express = require("express");
require("dotenv").config();
const { connect, getModels } = require("./database/dbConfig");

//Import routes
const v1OrganizationRouter = require("./v1/routes/organizationRoutes");
const v1SupplierRouter = require("./v1/routes/supplierRoutes");
const v1ClientRouter = require("./v1/routes/clientRoutes");
const v1UnitRouter = require("./v1/routes/unitRoutes");
const v1PartRouter = require("./v1/routes/partRoutes");

const env = process.env;
const app = express();
app.use(express.json());

app.use(function attachModels(req, res, next) {
  req.models = getModels();
  next();
});

//App routes
app.use("/api/v1/organizations", v1OrganizationRouter);
app.use("/api/v1/suppliers", v1SupplierRouter);
app.use("/api/v1/clients", v1ClientRouter);
app.use("/api/v1/units", v1UnitRouter);
app.use("/api/v1/parts", v1PartRouter);

const PORT = env.PORT || 3300;
app.listen(PORT, () => {
  console.log("SERVER: started on port", PORT);
  setTimeout(connect, 1000);
});
