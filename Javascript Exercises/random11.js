function threeStringHamburger(string){
  if(string.length <= 3){
    return "The input must be more than 3 letters!"
  }else{
  let threeChars = string.slice(string.length-3,string.length);
  return threeChars+string+threeChars;

  }
  }