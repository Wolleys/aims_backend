const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connect, getModels } = require("./database/dbConfig");
const routes = require("./v1/routes");

const env = process.env;
const app = express();
app.use(
  cors({
    credentials: true,
    methods: ["GET", "POST"],
    origin: [env.FRONT_END_ORIGIN],
   
  })
);
app.use(cookieParser());
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
