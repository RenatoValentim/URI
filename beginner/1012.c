#include <stdio.h>

int main() {
  double PI = 3.14159;
  double a, b, c;
  scanf("%lf%lf%lf", &a, &b, &c);
  double triangleRectangleArea = (a * c) / 2.0;
  double circleArea = PI * (c * c);
  double trapezeArea = (a + b) / 2.0 * c;
  double squareArea = b * b;
  double rectangleArea = a * b;
  printf("TRIANGULO: %.3f\n", triangleRectangleArea);
  printf("CIRCULO: %.3f\n", circleArea);
  printf("TRAPEZIO: %.3f\n", trapezeArea);
  printf("QUADRADO: %.3f\n", squareArea);
  printf("RETANGULO: %.3f\n", rectangleArea);
  return 0;
}
