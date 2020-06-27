function signDifference(num1,num2){
  if((num1 > 0 && num2 < 0)||(num1 < 0 && num2 > 0)){
    return true;
  }else if(num1 === 0 || num2 === 0){
    return "Cannot determine if a number is zero!";
  }else{
    return false;
  }
}