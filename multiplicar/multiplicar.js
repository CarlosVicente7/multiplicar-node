const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('Base no es un numero');
            return;
        }

        if (!Number(limite)) {
            reject('Limite no es un numero');
            return;
        }
        let data = '';
        for (i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        resolve(data.green);
    });

}

//module.exports.crearArchivo
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        let data = '';
        for (i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${ base }`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}