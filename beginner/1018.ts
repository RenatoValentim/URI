import * as fs from "fs";
import * as path from "path";

const myPath = path.join(__dirname, "file.txt");
const input = fs.readFileSync(myPath, "utf8");

let valueInput = Number(input);
const CEDULAS = [100, 50, 20, 10, 5, 2, 1];

console.log(valueInput);
CEDULAS.map(cedula => {
  console.log(Math.trunc(valueInput / cedula) + " nota(s) de R$ " + cedula.toFixed(2).replace('.', ','));
  valueInput = valueInput % cedula;
});
