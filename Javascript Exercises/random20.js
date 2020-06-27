function lettercheck(string,char){
  let chars = string.slice(1,4);
  let boolean;
  for(let i = 0; i < chars.length; i++){
    if(chars[i] == char){
      boolean = true;
      i = chars.length;
    }else{
      boolean = false;
    }
  }
  return boolean;
}