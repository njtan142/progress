function stringRemove(string,pos){
  let string1 = string.slice(0,eval(pos-1));
  let string2 = string.slice(eval(pos));
  let concatenatedString = string1+string2;
  return concatenatedString;
}