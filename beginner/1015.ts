import * as fs from "fs";
import * as path from "path";

const myPath = path.join(__dirname, "file.txt");
const input = fs.readFileSync(myPath, "utf8");
const lines = input.split("\n");

const P1 = lines.shift().split(' ').map(valueLine => Number(valueLine));
const P2 = lines.shift().split(' ').map(valueLine => Number(valueLine));

const EQUACAO1 = Math.pow(P2[0] - P1[0], 2);
const EQUACAO2 = Math.pow(P2[1] - P1[1], 2);

const distancia = Math.sqrt(EQUACAO1 + EQUACAO2);

console.log(distancia.toFixed(4))
