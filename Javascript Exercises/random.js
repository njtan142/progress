function given(number){
  let output;
  if(number > 13){
    output = Math.abs(13-number);
    output *= 2;
  }else{
  output = 13 - number;
  output = Math.abs(output);
  }
  console.log(output);
}