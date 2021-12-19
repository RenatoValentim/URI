#include <stdio.h>

int main() {
  float KMLcarConsumption = 12;
  int hoursTimeTrip, KMHavarangeSpeed;
  scanf("%d%d", &hoursTimeTrip, & KMHavarangeSpeed);
  float KMHDistance = KMHavarangeSpeed * hoursTimeTrip;
  float litersFuel = KMHDistance / KMLcarConsumption;
  printf("%.3f\n", litersFuel);
  return 0;
}
