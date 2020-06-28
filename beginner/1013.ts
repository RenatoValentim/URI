import * as fs from 'fs';
import * as path from 'path';

const myPath = path.join(__dirname, 'file.txt');
const input = fs.readFileSync(myPath, 'utf8');

const valoresInputString = input.split(' ');
const valoresInput = valoresInputString.map(valor => Number(valor));

const maiorAB = (valoresInput[0] + valoresInput[1] + Math.abs(valoresInput[0] - valoresInput[1])) / 2;

const verificaMaior = (valor1: number, valor2: number) => {
  return valor1 > valor2 ? valor1 : valor2;
};

console.log(verificaMaior(maiorAB, valoresInput[2]) + ' eh o maior');
