const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const ControllerRoutes = require("./routes/Controller");

//For DB connections
// mongoose.connect("", { useMongoClient: true });

// HOT reload
app.use(morgan("dev"));
//to parse data body for post requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//To allow CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT");
    return res.status(200).json({});
  }
  next();
});

//to specify which route file to pick
app.use("/api", ControllerRoutes);

//Error handling
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

//Handle internal server errors
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
