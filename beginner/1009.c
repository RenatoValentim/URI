#include <stdio.h>

int main() {
  char employeeName;
  float employeeSalary, totalSales;
  scanf("%s%f%f", &employeeName, &employeeSalary, &totalSales);
  float percentageSales = (totalSales * 15) / 100;
  float total = employeeSalary + percentageSales;
  printf("TOTAL = R$ %.2f\n", total);
  return 0;
}
