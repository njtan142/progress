function highestOfTheThree(int1,int2,int3){
  if(int1 == int2 && int2 == int3 && int3 == int1){
    return "They are all the same!";
  }else if(int1 > int2 && int1 > int3){
    return int1;
  }else if(int2 > int1 && int2 > int3){
    return int2;
  }else{
    return int3;
  }
}