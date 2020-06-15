const SELLES_NAME = 'JOAO';
const FIXED_SALRY = 1700.00;
const SALES_TOTAL_MONTH_IN_MONEY = 1230.50;

function salaryBonusCalculation(salesTotalMonthInMoney, fixedSalry, percentage) {
  let final_salary;
  if (percentage !== undefined | null) {
    final_salary = ((salesTotalMonthInMoney * percentage) / 100) + fixedSalry;
  }

  return final_salary;
}

const FINAL_SALARY = salaryBonusCalculation(SALES_TOTAL_MONTH_IN_MONEY, FIXED_SALRY, 15);
console.log('TATAL = R$ ' + FINAL_SALARY.toFixed(2));
