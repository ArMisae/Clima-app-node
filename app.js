const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion).then(console.log);

// clima.getClima(14.090000, -87.220001).then(console.log).catch(console.log);

const getInfo = async(direccion) => {

    try {

        const ubicacion = await lugar.getLugarLatLng(direccion);

        const tiempo = await clima.getClima(ubicacion.lat, ubicacion.lng);

        return `El clima de ${ direccion } es de ${ tiempo }`

    } catch (err) {

        return `No se pudo determinar el clima de ${direccion}`

    }


}


getInfo(argv.direccion).then(console.log).catch(console.log);