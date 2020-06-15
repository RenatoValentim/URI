const GRADE_A = 5.0;
const GRADE_B = 6.0;
const GRADE_C = 7.0;
const WEIGHT_GRADE_A = 2;
const WEIGHT_GRADE_B = 3;
const WEIGHT_GRADE_C = 5;
const WEIGHTS = WEIGHT_GRADE_A + WEIGHT_GRADE_B + WEIGHT_GRADE_C;

function assingWeightToGrade(grade, weight) {
  let gradeWithWeight;
  if (grade >= 0 && grade <= 10) {
    gradeWithWeight = grade * weight;
  }

  return gradeWithWeight;
}

const AVAREGE =
  (assingWeightToGrade(GRADE_A, WEIGHT_GRADE_A) +
    assingWeightToGrade(GRADE_B, WEIGHT_GRADE_B) +
    assingWeightToGrade(GRADE_C, WEIGHT_GRADE_C)) /
  WEIGHTS;

console.log("MEDIA = " + AVAREGE.toFixed(1));
