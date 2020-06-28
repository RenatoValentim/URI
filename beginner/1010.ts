import * as fs from 'fs';
import * as path from 'path';

const myPath = path.join(__dirname, 'file.txt');
const input = fs.readFileSync(myPath, 'utf8');
const lines = input.split('\n');

const line1 = lines.shift();
const line2 = lines.shift();

const peca1 = line1.split(' ');
const peca2 = line2.split(' ');

const totalPagar = (Number(peca1[1]) * Number(peca1[2])) + (Number(peca2[1]) * Number(peca2[2]));

console.log('VALOR A PAGAR: R$ ' + totalPagar.toFixed(2));
