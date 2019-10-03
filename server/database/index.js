const Sequelize = require('sequelize');

let sequelize = new Sequelize(
    'weather-db',
    'postgres',
    '123456',
    {
        host: "localhost",
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