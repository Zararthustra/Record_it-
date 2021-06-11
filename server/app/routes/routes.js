const express = require('express');
const router = express.Router();
const db = require("../models");
const { Op } = require("sequelize");


router.use(express.json());

// GET all Users
router.get("/users", (req, res) => {
  db.user.findAll().then(function (users) {
    res.json(users);
  });
});

// Add a new record
router.put("/addRecord", (req, res) => {
  console.log(req.body.record);
  db.record.update({
    record: req.body.record
  }, { where: {
    //id: id of the current user
      record: {
        [Op.lt]: req.body.record
      }
    }}
  )
});

module.exports = router;