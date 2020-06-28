import * as fs from "fs";
import * as path from "path";

const myPath = path.join(__dirname, "file.txt");
const input = fs.readFileSync(myPath, "utf8");
const lines = input.split("\n");

const distanciaPercorrida = Number(lines.shift());
const combustivelGasto = Number(lines.shift());

const consumoMedio = (distanciaPercorrida: number, combustivelGasto: number) =>
  distanciaPercorrida / combustivelGasto;

console.log(consumoMedio(distanciaPercorrida, combustivelGasto).toFixed(3) + ' km/l');
