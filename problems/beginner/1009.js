const SELLES_NAME = 'JOAO';
const FIXED_SALRY = 1700.00;
const SALES_TOTAL_MONTH_IN_MONEY = 1230.50;

function salaryBonusCalculation(salesTotalMonthInMoney, fixedSalry, percentage) {
  let finalSalary;
  if (percentage !== undefined | null) {
    finalSalary = ((salesTotalMonthInMoney * percentage) / 100) + fixedSalry;
  }

  return finalSalary;
}

const FINAL_SALARY = salaryBonusCalculation(SALES_TOTAL_MONTH_IN_MONEY, FIXED_SALRY, 15);
console.log('TATAL = R$ ' + FINAL_SALARY.toFixed(2));
