const axios = require('axios');

const API_KEY = 'xxxxxxxxx';

const Weather = async (city) =>{
 try{
   const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`);
   return response.data;
 }catch(e){
     console.log(e);
 }
}

module.exports = Weather;