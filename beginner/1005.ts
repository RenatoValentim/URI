import * as fs from 'fs';
import * as path from 'path';

const myPath = path.join(__dirname, 'file.txt');
const input = fs.readFileSync(myPath, 'utf8');
const lines = input.split('\n');

const gradeStudentA = Number(lines.shift());
const gradeStudentB = Number(lines.shift());

const average = (gradeA: number, gradeB: number) => {
  const WEIGHT_A = 3.5;
  const WEIGHT_B = 7.5;
  const WEIGHTS = WEIGHT_A + WEIGHT_B;

  return ((gradeA * WEIGHT_A) + (gradeB * WEIGHT_B)) / WEIGHTS;
};

console.log('MEDIA = ' + average(gradeStudentA, gradeStudentB).toFixed(5));
