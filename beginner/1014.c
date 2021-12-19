#include <stdio.h>

int main() {
  float totalDistance;
  float totalFuelConsumption;
  scanf("%f%f", &totalDistance, &totalFuelConsumption);
  float mediaFuelConsumption = totalDistance / totalFuelConsumption;
  printf("%.3f km/l\n", mediaFuelConsumption);
  return 0;
}
