#include <stdio.h>

int main() {
  float a, b;
  float const PA = 3.5;
  float const PB = 7.5;
  scanf("%f%f", &a, &b);
  float media = ((a * PA) + (b * PB)) / (PA + PB);
  printf("MEDIA = %.5f\n", media);
  return 0;
}
