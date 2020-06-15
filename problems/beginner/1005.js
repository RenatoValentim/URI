const GRADE_A = 5.0;
const GRADE_B = 7.1;
const WEIGHT_GRADE_A = 3.5;
const WEIGHT_GRADE_B = 7.5;
const WEIGHTS = WEIGHT_GRADE_A + WEIGHT_GRADE_B;

function assingWeightToGrade(grade, weight) {
  let gradeWithWeight;
  if (grade >= 0 && grade <= 10) {
    gradeWithWeight = grade * weight;
  }

  return gradeWithWeight;
}

const AVAREGE =
  (assingWeightToGrade(GRADE_A, WEIGHT_GRADE_A) +
    assingWeightToGrade(GRADE_B, WEIGHT_GRADE_B)) /
  WEIGHTS;

console.log("MEDIA = " + AVAREGE.toFixed(5));
