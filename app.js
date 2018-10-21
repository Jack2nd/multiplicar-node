const argv = require('./config/yargs.js').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// let base = 9;

// console.log(process.argv.indexOf('base')

console.log(argv);

let base = argv.base;
let limite = argv.limite;

switch (argv._[0]) {
    case 'listar':
        listarTabla(base, limite);
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}


// let base = process.argv[2].split('=')[1];