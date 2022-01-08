#include <stdio.h>

int main() {
  int seconds;
  scanf("%d", &seconds);
  int hours = (int)(seconds / 3600);
  int hoursInSeconds = hours * 3600;
  seconds -= hoursInSeconds;
  int minutes = (int)(seconds / 60);
  int minutesInSeconds = minutes * 60;
  seconds -= minutesInSeconds;
  printf("%d:%d:%d\n", hours, minutes, seconds);
  return 0;
}
