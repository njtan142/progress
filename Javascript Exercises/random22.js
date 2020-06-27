function lastDigit(int1,int2,int3){
  if(int1<0 || int2 < 0 || int3 < 0){
    return "The numbers must be positive!";
  }
  let num1 = int1.toString();
  let num2 = int2.toString();
  let num3 = int3.toString();
  num1 = num1[num1.length-1];
  num2 = num2[num2.length-1];
  num3 = num3[num3.length-1];
  if(num1 == num2 && num1 == num3){
    return "Their last digit are the same!";
  }else{
    return "Their last digit are not the same!";
  }
}