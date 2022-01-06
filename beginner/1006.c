#include <stdio.h>

int main() {
    float a, b, c;
    float const PA = 2;
    float const PB = 3;
    float const PC = 5;
    scanf("%f%f%f", &a, &b, &c);
    if (a > 10 || b > 10 || c > 10) {
      printf("As notas devem ser abaixo de 10.0\n");
      return 0;
    }
    float average = ((a * PA) + (b * PB) + (c * PC)) / (PA + PB + PC);
    printf("MEDIA = %.1f\n", average);
    return 0;
}
