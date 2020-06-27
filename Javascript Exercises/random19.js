function range(int1,int2){
  let output;
  if(int1 == int2){
    output = "They are the same!";
  }else if(int1 > int2){
    output = `${int1} is the highest`;
  }else if(int2 > int1){
    output = `${int2} is the highest`;
  }
  if(int1 >= 40 && int1 <= 60 && int2 >= 40 && int2 <= 60){
    return output+" and the two are in the range of 40 to 60!";
  }else{
    return output+" and one/or both of them are not in the range of 40 to 60!";
  }
}