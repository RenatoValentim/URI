import * as fs from 'fs';
import * as path from 'path';

const myPath = path.join(__dirname, 'file.txt');
const input = fs.readFileSync(myPath, 'utf8');

const raio = Number(input);

const volumeEsfera = (raio: number) => {
  const PI = 3.14159;
  
  return (4 / 3.0) * PI * Math.pow(raio, 3);
};

console.log('VOLUME = ' + volumeEsfera(raio).toFixed(3));
