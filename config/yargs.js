const opt = {
    base: {
        alias: 'b',
        demand: true
    },
    limite: {
        alias: 'l',
        default: 10,
    }
}

const argv = require('yargs')
    .command('listar', 'Lista la tabla de multiplicar', opt)
    .command('crear', 'Crea una tabla de multiplicar', opt)
    .help()
    .argv;

module.exports = {
    argv
}