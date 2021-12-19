#include <stdio.h>
#include <stdlib.h>

int main() {
  int a, b, s;
  scanf("%d%d%d", &a, &b, &s);
  int major = (a + b + abs(a - b)) / 2;
  if (major < s) {
    major = s;
  }
  printf("%d eh o maior\n", major);
  return 0;
}
