import * as fs from 'fs';
import * as path from 'path';

const myPath = path.join(__dirname, 'file.txt');
const input = fs.readFileSync(myPath, 'utf8');
const lines = input.split('\n');

const gradeStudentA = Number(lines.shift());
const gradeStudentB = Number(lines.shift());
const gradeStudentC = Number(lines.shift());

const average = (gradeA: number, gradeB: number, gradeC: number) => {
  const WEIGHT_A = 2;
  const WEIGHT_B = 3;
  const WEIGHT_C = 5;
  const WEIGHTS = WEIGHT_A + WEIGHT_B + WEIGHT_C;

  return ((gradeA * WEIGHT_A) + (gradeB * WEIGHT_B) + (gradeC * WEIGHT_C)) / WEIGHTS;
};

console.log('MEDIA = ' + average(gradeStudentA, gradeStudentB, gradeStudentC).toFixed(1));
