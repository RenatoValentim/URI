import * as fs from 'fs';
import * as path from 'path';

const myPath = path.join(__dirname, 'file.txt');
const input = fs.readFileSync(myPath, 'utf8');
const lines = input.split('\n');

const A = Number(lines.shift());
const B = Number(lines.shift());

const sum = (value1: number, value2: number) => value1 + value2;

console.log('X = ' + sum(A, B));
