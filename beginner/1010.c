#include <stdio.h>

int main() {
  int codePart1, numbersPart1;
  float unitValuePart1;
  int codePart2, numbersPart2;
  float unitValuePart2;
  scanf("%d%d%f", &codePart1, &numbersPart1, &unitValuePart1);
  scanf("%d%d%f", &codePart2, &numbersPart2, &unitValuePart2);
  float totalPaiment = (numbersPart1 * unitValuePart1) + (numbersPart2 * unitValuePart2);
  printf("VALOR A PAGAR: R$ %.2f\n", totalPaiment);
  return 0;
}
