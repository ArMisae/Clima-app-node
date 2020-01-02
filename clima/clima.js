const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=39d80b0a298de8df84d37e944a8428ff&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}