import * as fs from 'fs';
import * as path from 'path';

const myPath = path.join(__dirname, 'file.txt');
const input = fs.readFileSync(myPath, 'utf8');

const valores = input.split(' ');

const areaTrianguloRetanglo = (Number(valores[0]) * Number(valores[2])) / 2;
const areaCirculo = 3.14159 * Math.pow(Number(valores[2]), 2);
const areaTrapezio = (Number(valores[0]) + Number(valores[1])) * Number(valores[2]) / 2;
const areaQuadrado = Math.pow(Number(valores[1]), 2);
const areaRetangulo = Number(valores[0]) * Number(valores[1]);

console.log('TRIANGULO: ' + areaTrianguloRetanglo.toFixed(3));
console.log('CIRCULO: ' + areaCirculo.toFixed(3));
console.log('TRAPEZIO: ' + areaTrapezio.toFixed(3));
console.log('QUADRADO: ' + areaQuadrado.toFixed(3));
console.log('RETANGULO: ' + areaRetangulo.toFixed(3));
