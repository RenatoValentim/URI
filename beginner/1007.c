#include <stdio.h>

int main() {
  int a, b, c, d;
  scanf("%d%d%d%d", &a, &b, &c, &d);
  int diff = (a * b - c * d);
  printf("DIFERENCA = %.1d\n", diff);
  return 0;
}
