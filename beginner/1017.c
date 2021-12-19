#include <stdio.h>

int main() {
  float KMLcarConsumption = 12;
  int hoursTimeTrip, KMHaverangeSpeed;
  scanf("%d%d", &hoursTimeTrip, & KMHaverangeSpeed);
  float KMHDistance = KMHaverangeSpeed * hoursTimeTrip;
  float litersFuel = KMHDistance / KMLcarConsumption;
  printf("%.3f\n", litersFuel);
  return 0;
}
