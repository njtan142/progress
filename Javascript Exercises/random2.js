function nineteen(num){
  let output;
  if(num > 19){
    output = Math.abs(19-num)*3;
  }else{
    output = 19-num;
  }
  return output;
}