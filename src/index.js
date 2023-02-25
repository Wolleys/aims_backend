const express = require("express");
require("dotenv").config();
const { connect, getModels } = require("./database/dbConfig");

//Routes
const v1OrganizationRouter = require("./v1/routes/organizationRoutes");

const env = process.env;
const app = express();
app.use(express.json());

app.use(function attachModels(req, res, next) {
  req.models = getModels();
  next();
});

app.use("/api/v1/organizations", v1OrganizationRouter);

const PORT = env.PORT || 3300;
app.listen(PORT, () => {
  console.log("SERVER: started on port", PORT);
  setTimeout(connect, 1000);
});
