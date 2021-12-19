#include <stdio.h>

int main() {
  double PI = 3.14159;
  double radius;
  scanf("%lf", &radius);
  double circleVolume = (4 / 3.0) * PI * (radius * radius * radius);
  printf("VOLUME = %.3f\n", circleVolume);
  return 0;
}
