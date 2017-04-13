#include "jswrap.h"
#include "afunc.h"

Robot * robot2 = new Robot(200,45); // wrapped in getSum3()

int getSum3(void){
  return robot2->getSum();
}
