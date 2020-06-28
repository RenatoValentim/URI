import * as fs from 'fs';
import * as path from 'path';

const myPath = path.join(__dirname, 'file.txt');
const input = fs.readFileSync(myPath, 'utf8');

const R = Number(input);
const PI = 3.14159;
const area = (radius: number) => PI * Math.pow(radius, 2);

console.log('A=' + area(R).toFixed(4));
