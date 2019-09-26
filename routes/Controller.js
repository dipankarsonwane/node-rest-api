const express = require("express");
const router = express.Router();

//Postgres connection
const { Pool, Client } = require("pg");
const connectionString = "postgressql://test:test@localhost:5432/test";

const client = new Client({
  connectionString: connectionString
});
client.connect();

router.get("/getAllEmployees", (req, res, next) => {
  client.query("select* from product", (err, response) => {
    res.status(200).json({
      message: "get all employees",
      data: response.rows
    });
  });
});

router.get("/getOne/:id", (req, res, next) => {
  const id = req.params.id;
  client.query("select* from product where id=" + id, (err, response) => {
    res.status(200).json({
      message: "get one",
      data: response.rows
    });
  });
});

router.post("/newEmployee", (req, res, next) => {
  const employee = {
    name: req.body.name,
    id: req.body.id
  };
  res.status(200).json({
    message: "post new employee",
    createEmployee: employee
  });
});

module.exports = router;
