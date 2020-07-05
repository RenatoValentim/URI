import * as fs from "fs";
import * as path from "path";

const myPath = path.join(__dirname, "file.txt");
const input = fs.readFileSync(myPath, "utf8");

const distancia = Number(input);

const afastamento = (distancia: number) => distancia * 2;

console.log(afastamento(distancia) + ' minutos');
