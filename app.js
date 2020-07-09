const argv = require('./config/yargs').argv;
var colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
console.log(argv);
switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${ colors.red(archivo) }.txt`.green))
            .catch(err => console.error('Error:', err));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Tabla : \n${ archivo }.txt`))
            .catch(err => console.error('Error:', err));
        break;
    default:
        console.log('no reconocido');
        break;
}