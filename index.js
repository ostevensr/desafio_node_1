import { registrar, leer } from './operaciones.js';
import fs from 'fs';

const argumentos = process.argv.slice(2);

let dataInicial = fs.readFileSync('citas.json', 'utf8');

let citas = JSON.parse(dataInicial || '[]');

if (argumentos[0] === "registrar") {

    const registro = registrar(argumentos[1], argumentos[2], argumentos[3], argumentos[4], argumentos[5]);

    citas.push(registro);

    fs.writeFileSync('citas.json', JSON.stringify(citas));

    console.log("Registro agregado exitosamente");

} else if (argumentos[0] === "leer") {
    if (citas.length === 0) {

        console.log("No existen citas registradas");

    } else {

        leer(citas);

    }
} else {
    console.log("Indique operación válida: Indique Registrar o Leer");
};