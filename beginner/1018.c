#include <stdio.h>

int main() {
  int value;
  int considered_bullet[7] = {100, 50, 20, 10, 5, 2, 1};
  scanf("%d", &value);
  printf("%d\n", value);
  for (int index = 0; index < 7; index++) {
    printf("%d nota(s) de R$ %.d,00\n", (int)(value / considered_bullet[index]), (char)considered_bullet[index]);
    value = value % considered_bullet[index];
  }
  return 0;
}
