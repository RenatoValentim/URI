#include <stdio.h>

int main() {
  int days;
  scanf("%d", &days);
  int year = days / 365;
  int yearsInDays = year * 365;
  days -= yearsInDays;
  int month = days / 30;
  int monthInDays = month * 30;
  days -= monthInDays;
  printf("%d ano(s)\n", year);
  printf("%d mes(es)\n", month);
  printf("%d dia(s)\n", days);
  return 0;
}
