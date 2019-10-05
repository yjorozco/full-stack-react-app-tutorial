const Sequelize = require('sequelize');
require('dotenv').config()

let sequelize = new Sequelize(
    process.env.DB,
    process.env.USER_DB,
    process.env.PASSWORD_DB,
    {
        host: process.env.HOST,
        dialect:'postgres',
        pool: {
            max:5,
            min:0,
            require: 10000,
            idle: 10000
        },
        logging: false
    },
    
);


module.exports =sequelize;