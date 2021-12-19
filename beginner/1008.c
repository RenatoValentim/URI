#include <stdio.h>

int main() {
  int employeeNumber, workedHours;
  float valueHours;
  scanf("%d%d%f", &employeeNumber, &workedHours, &valueHours);
  float salary = workedHours * valueHours;
  printf("NUMBER = %d\n", employeeNumber);
  printf("SALARY = U$ %.2f\n", salary);
  return 0;
}
