const Sequelize = require('sequelize');

const sequeize = new  Sequelize('node-mysql', 'root', 'Dharvik.Mysql', {
    dialect : 'mysql',
    host : 'localhost',
})

module.exports = sequeize;