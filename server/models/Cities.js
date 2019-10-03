const Sequelize = require('sequelize');
const sequelize  = require('../database/index.js');

const Cities = sequelize.define('cities',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,     
    },
    city_name:{
        type: Sequelize.STRING(50)
    },
}, {
    timestamps:false
});

module.exports = Cities;