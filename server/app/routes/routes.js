const express = require('express');
const router = express.Router();
const db = require("../models");

// GET all Users
router.get("/users", (req, res) => {
  db.user.findAll().then(function (users) {
    res.json(users);
  });
});

module.exports = router;