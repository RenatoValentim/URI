import * as fs from 'fs';
import * as path from 'path';

const myPath = path.join(__dirname, 'file.txt');
const input = fs.readFileSync(myPath, 'utf8');
const lines = input.split('\n');

const nome = Number(lines.shift());
const salario = Number(lines.shift());
const totalVendasMes = Number(lines.shift());

const comissaoSobreVendasMes = (totalVendasMes: number) => {
  return (totalVendasMes * 15) / 100
}

const totalReceber = salario + comissaoSobreVendasMes(totalVendasMes);

console.log('TOTAL = R$ ' + totalReceber.toFixed(2));
