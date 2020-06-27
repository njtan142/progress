function timeConverter(int1){
  let hours = 0;
  let minutes = 0;
  while(int1 !== 0){
    if(int1-60 >= 0){
      int1 -= 60;
      hours++;
    }else{
      minutes += int1;
      int1 -= int1;
    }
  }
  return `Hours: ${hours} \
  Minutes: ${minutes}`;
}