const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedURL = encodeURI(direccion);
    //console.log(encodedURL);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyAbPC1F9pWeD70Ny8PHcjguPffSLhT-YF8`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion} `);
    }


    //console.log(JSON.stringify(resp.data, undefined, 2));
    let location = {
        dir: resp.data.results[0]['formatted_address'],
        lat: resp.data.results[0]['geometry']['location']['lat'],
        lng: resp.data.results[0]['geometry']['location']['lng']
    }

    return {
        dir: location.dir,
        lat: location.lat,
        lng: location.lng
    }
}

module.exports = {
    getLugarLatLng
}