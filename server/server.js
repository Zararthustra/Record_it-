const express = require('express');
const db = require("./app/models");
const cors = require('cors');
const app = express()
const routes = require('./app/routes/routes')


db.sequelize.sync();

app.listen(3001, () => {
    console.log("Server running on 3001");
})

app.use("/apiroutes", routes);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));