import * as fs from "fs";
import * as path from "path";

const myPath = path.join(__dirname, "file.txt");
const input = fs.readFileSync(myPath, "utf8");
const lines = input.split("\n");

const ALTONOMIA = 12;

const tempoViagem = Number(lines.shift());
const velocidadeMedia = Number(lines.shift());

const deslocamento = (tempoViagem: number, velocidadeMedia: number) => velocidadeMedia * tempoViagem;
const consumo = deslocamento(tempoViagem, velocidadeMedia) / ALTONOMIA;

console.log(consumo.toFixed(3));
