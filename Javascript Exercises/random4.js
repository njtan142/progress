function integer(num){
  if(num <= 20){
    console.log("Within 20!");
  }else if(num <= 100 && num > 20){
    console.log("Within 100!");
  }else if(num <= 400 && num > 100){
    console.log("Within 400!");
  }else{
    console.log("Not my reach!");
  }
}