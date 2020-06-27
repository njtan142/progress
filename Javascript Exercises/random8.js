function stringReverseStartAndEnd(string){
  let firstLetter = string.slice(0,1);
  let lastLetter = string.slice(string.length - 1)
  let middle = string.slice(1,string.length-1)
  let output = lastLetter+middle+firstLetter
      return output;
}