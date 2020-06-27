function scriptChecker(string){
  let index = string.indexOf("Script");
  if(index == -1){
    return 'There is no "Script"!';
  }else{
    let output = string.replace('Script','');
    return output;
  }
}