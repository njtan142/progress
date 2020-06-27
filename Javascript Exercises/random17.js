function nearestTo100(int1,int2){
  let diff1 = Math.abs(100-int1);
  let diff2 = Math.abs(100-int2);
  if(diff1 == diff2){
    return "Both are the nearest!";
  }else if(diff1 > diff2){
    return int2;
  }else{
    return int1;
  }
}