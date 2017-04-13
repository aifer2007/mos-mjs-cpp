#include "afunc.h"

void hiYou(char * name){
  printf("\nHello, %s\n", name);
}


Robot::Robot(int a, int b){
  this->a = a;
  this->b = b;
}

int Robot::getSum(void){
  return this->a + this->b;
}

int getSum2(void){
  Robot * robot = new Robot(9,5);
  return robot->getSum();
}
