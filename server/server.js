const express = require('express');
const db = require("./app/models");
const cors = require('cors')
const app = express()
const routes = require('./app/routes/routes')
let currentUser = null
/* Setup ------------------------------------------------------------------------------------ */

db.sequelize.sync();

app.listen(3001, () => {
    console.log("Server running on 3001");
})

app.use("/apiroutes", routes);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Methods ------------------------------------------------------------------------------------------- */

//POST create user
app.post('/create', (req, res) => {
    const name = req.body.name;
    const password = req.body.password;

    db.user.create({
        name: name,
        password: password
    }).then(submitedUsers => res.send(submitedUsers))
})

//POST check login
app.post('/login', (req, res) => {
    const name = req.body.name;
    const password = req.body.password;

    db.user.findAll({
        where: {
            name: name,
            password: password
        }
    })
        .then((checkedUser) => {
            //send checked user object to front
            res.send(checkedUser)
            currentUser = checkedUser
            //console.log(currentUser[0].dataValues);
        })
})

//GET ONE
app.get("/users/:id", (req, res) => {
    db.user.findAll({
        where: {
            id: req.params.id
        }
    }).then(users => res.json(users));
});


//UPDATE
app.put('/users/update', (req, res) => {
    db.user.update(
        {
            name: req.body.name
        },
        { where: { id: req.body.id } }
    )
});

//DELETE
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    db.user.destroy({
        where: {
            id: id
        }
    })
});

/* ------------------------------------------------------------------------------------------- */