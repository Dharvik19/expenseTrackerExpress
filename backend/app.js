const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const cors = require('cors');

const sequelize = require('./util/database');

const router = require('./routes/routes');

app.use(bodyParser.json());

app.use(cors());

app.use(router);

app.use('/', (req, res, next)=>{
    res.send("Hello World");
})

sequelize.sync()
.then(result => {
    app.listen(3000);
})
.catch(err=>{
    console.log(err);
})