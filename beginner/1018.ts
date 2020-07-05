import * as fs from "fs";
import * as path from "path";

const myPath = path.join(__dirname, "file.txt");
const input = fs.readFileSync(myPath, "utf8");

const CEDULAS = [100, 50, 20, 10, 5, 2, 1];

const obterMenorNumeroCedulasPossivel = (cedulas: number[], dividendoPelasCedulas: number) => {
  const cedulasValidas = []
  cedulas.map(cedula => {
    if (dividendoPelasCedulas % cedula === 0) {
      cedulasValidas.push(cedula);
    }
  })
  console.log(cedulasValidas);
  return cedulasValidas;
}

console.log(input);
console.log(obterMenorNumeroCedulasPossivel(CEDULAS, Number(input)));
