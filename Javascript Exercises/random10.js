function multipleOf3and7(int){
  if(int%3 === 0 && int%7 === 0){
    return "Multiple of 3 and 7!";
  }else if(int%3 === 0){
    return "Multiple of 3!";
  }else if(int%7 === 0){
    return "Multiple of 7!";
  }else{
    return"Not a multiple of 3 nor 7!";
  }
}