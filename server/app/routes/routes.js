const express = require('express');
const router = express.Router();
const db = require("../models");
const { Op } = require("sequelize");
const cors = require('cors')

// check localstorage score


router.use(express.json());
router.use(cors());
/* Users Methods ------------------------------------------------------------------------------------------- */

// GET all Users
router.get("/users", (req, res) => {
  db.user.findAll().then(function (users) {
    res.json(users);
  });
});

/* Records Methods ------------------------------------------------------------------------------------------- */

// GET all Records
router.get("/records", (req, res) => {
  db.record.findAll().then((users) => {
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

// Get a record of user
router.post("/getRecords", (req, res) => {
  db.record.findAll({
    where: {
      user_id: req.body.user_id,
      game_id: req.body.game_id
    }
  }).then((record) => {
    res.json(record);
  });
})

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
        user_name: req.body.user_name,
        game_id: req.body.game_id,
        game_name: req.body.game_name
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