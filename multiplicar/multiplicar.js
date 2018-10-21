const fs = require('fs');
const colors = require('colors');
// const fs = require('express');
// const fs = require('./fs');


let listarTabla = (base, limite) => {

    console.log(`=======================`.green);
    console.log(`===== Tabla del ${base} =====`.green);
    console.log(`=======================`.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        let nombreDeArchivo = `tablas/tabla-${base}.txt`;
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(nombreDeArchivo, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(nombreDeArchivo);
        });
    });
}
module.exports = { // importante.
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}