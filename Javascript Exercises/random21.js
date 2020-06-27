function threeLetters(string){
  if(string.length <= 3){
    return string.toUpperCase();
  }else{
    let threeLetters = string.slice(0,3);
    return string.replace(threeLetters,threeLetters.toLowerCase());
  }
}