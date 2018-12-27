    // AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM
    // AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ
    // AIzaSyA5mjCwx1TRLuBAjwQw84WE6h5ErSe7Uj8
    // AIzaSyCroCERuudf2z02rCrVa6DTkeeneQuq8TA
    // AIzaSyBkDYSVRVtQ6P2mf2Xrq0VBjps8GEcWsLU
    // AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI
    // AIzaSyAZ7zantyAHnuNFtheMlJY1VvkRBEjvw9Y
    // AIzaSyDSPDpkFznGgzzBSsYvTq_sj0T0QCHRgwM
    // AIzaSyD4YFaT5DvwhhhqMpDP2pBInoG8BTzA9JY
    // AIzaSyAbPC1F9pWeD70Ny8PHcjguPffSLhT-YF8

    //api openweathermap b32d412ae5b1a06abd31860cbb4e057d
    //https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b32d412ae5b1a06abd31860cbb4e057d

    const lugar = require('./lugar/lugar.js');
    const clima = require('./clima/clima.js');
    const argv = require('./config/yargs.js').argv;
    console.log(argv.direccion);

    let getInfo = async() => {
        try {
            let coors = await lugar.getLugarLatLng(argv.direccion);
            let temp = await clima.getClima(coors.lat, coors.lng);

            return `El clima en ${ coors.dir } es de ${temp}°C`;
        } catch (e) {
            return `no se pudo determinar el clima en ${coors.dir}`;
        }
    }

    getInfo(argv.direccion)
        .then(mensaje => console.log(mensaje))
        .catch(e => console.log(e));
    // https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&appid=b32d412ae5b1a06abd31860cbb4e057d