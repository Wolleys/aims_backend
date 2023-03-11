const express = require("express");
require("dotenv").config();
const { connect, getModels } = require("./database/dbConfig");
const routes = require("./v1/routes");

const env = process.env;
const app = express();
app.use(express.json());

app.use(function attachModels(req, res, next) {
  req.models = getModels();
  next();
});

// App routes
app.use(routes);

const PORT = env.PORT || 3300;
app.listen(PORT, () => {
  console.log("SERVER: started on port", PORT);
  setTimeout(connect, 1000);
});
