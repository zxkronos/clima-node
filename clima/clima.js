const axios = require('axios');

const getClima = async(lat, lng) => {


    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=b32d412ae5b1a06abd31860cbb4e057d`);

    console.log(resp.data.main.temp);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}