function wordCapitalizer(string){
  let wordsArr = string.split(' ');
  let finalArr = [];
  for(let i = 0; i < wordsArr.length; i++){
    wordsArr[i] = wordsArr[i].replace(wordsArr[i][0],wordsArr[i][0].toUpperCase());
    finalArr.push(wordsArr[i]);
  }
  return finalArr.join(' ');
}