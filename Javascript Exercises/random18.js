function range(int1,int2){
  if(int1 >= 40 && int1 <= 60 && int2 >= 40 && int2 <= 60 ){
    return "In the range of 40 to 60!";
  }else if(int1 >= 70 && int1 <= 100 && int2 >= 70 && int2 <= 100){
    return "In the range of 70 to 100!";
  }else{
    return "Not in the range of 40 to 60 nor 70 to 100!";
  }
}