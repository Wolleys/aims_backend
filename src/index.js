require("dotenv").config();
const env = process.env;
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const cookieParser = require("cookie-parser");
const startServer = require("./config/startServer");
const attachModels = require("./middlewares/attachModels");
const routes = require("./v1/routes");

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// Built-in middleware for json
app.use(express.json());

// Middleware for cookies
app.use(cookieParser());

// Attach models
app.use(attachModels);

// App routes
app.use(routes);

// Start server and connect DB
startServer(app);
