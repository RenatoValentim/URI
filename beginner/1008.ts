import * as fs from 'fs';
import * as path from 'path';

const myPath = path.join(__dirname, 'file.txt');
const input = fs.readFileSync(myPath, 'utf8');
const lines = input.split('\n');

const numeroFuncionario = Number(lines.shift());
const horasTrabalhadas = Number(lines.shift());
const valorHora = Number(lines.shift());

const salario = (valorHora: number, horasTrabalhadas: number) => valorHora * horasTrabalhadas;

console.log('NUMBER = ' + numeroFuncionario);
console.log('SALARY = R$ ' + salario(valorHora, horasTrabalhadas).toFixed(2));
