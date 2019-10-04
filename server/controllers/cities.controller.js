const Cities = require('../models/Cities');
const Weather = require('../api/Weather')

exports.retrieveAll = async (req, res, next) => {
    try {
        const cities = await Cities.findAll();
        return res.json({
            data: cities
        });
    }
    catch (e) {
        console.log(e);
        next();
    }
}

exports.insert = async (req, res, next) => {
    try {
        console.log(req.body.city);
        const { city } = await req.body;
        const city_object = await Cities.create({
            city_name: city,

        }, {
            fields: [
                'city_name',
            ]
        });

        return res.json({
            city: city_object
        });
    } catch (e) {
        console.log(e);
        next();
    }
}

exports.weather = async (req, res, next) => {
    try {
        const { city } = await req.params;
        const weather = await Weather(city);
        return res.json({
            data: weather
        })
    } catch (e) {
        console.log(e);
        next();
    }
}