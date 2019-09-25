const express = require("express");
const router = express.Router();

router.get("/getAllEmployees", (req, res, next) => {
  res.status(200).json({
    message: "get all employees"
  });
});

router.get("/getOne/:id", (req, res, next) => {
  const id = req.params.id;
  if (id == 10) {
    res.status(200).json({
      message: "found: " + id
    });
  } else {
    res.status(200).json({
      message: "not found"
    });
  }
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
