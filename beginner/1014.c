#include <stdio.h>

int main() {
  float totalDistance;
  float totalFuelConsumption;
  scanf("%f%f", &totalDistance, &totalFuelConsumption);
  float averangeFuelConsumption = totalDistance / totalFuelConsumption;
  printf("%.3f km/l\n", averangeFuelConsumption);
  return 0;
}
