const express = require('express');
const router = express.Router();
const db = require("../models");
const { Op } = require("sequelize");
const cors = require('cors')

// check localstorage score


router.use(express.json());
router.use(cors());

// GET all Users
router.get("/users", (req, res) => {
  db.user.findAll().then(function (users) {
    res.json(users);
  });
});

// Add new game if not exist
router.put("/addGame", (req, res) => {
  db.game.findOrCreate({
    where: {
      id: req.body.id,
      name: req.body.name
    },
    defaults: {
      id: req.body.id,
      name: req.body.name
    }
  })
});

// Add or update a new record
router.put("/addRecord", (req, res) => {
  db.record.findOrCreate({
    where: {
      user_id: req.body.user_id,
      game_id: req.body.game_id
    },
    defaults: {
      record: req.body.record,
      user_id: req.body.user_id,
      game_id: req.body.game_id
    }
  }).then(() => {
    db.record.update({
      record: req.body.record
    }, {
      where: {
        record: {
          [Op.lt]: req.body.record
        },
        user_id: req.body.user_id,
        game_id: req.body.game_id
      }
    }
    )
  })
});

module.exports = router;