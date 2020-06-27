//  Write a JavaScript function that generates all combinations of a string
  // Make a function called factorial that takes an int value type parameter
    // If the int is equals to one, return 1
    // Else
      // return the int multiplied by the factorial with the parameter of decremented int
  // Make a function called stringCombination that takes a string value type parameter
    // If the type of parameter is int, then convert it to string
    // Make a for loop that loops as many as the function factorial with the parameter of string's length
    
    
    
    
    
    
    
    
  // Make a function called factorial that takes an int value type parameter
  function factorial(int){
  // If the int is equals to one, return 1
    if(int == 1){
      return 1;
    }
    // Else
    else{
      // return the int multiplied by the factorial with the parameter of decremented int
      return int * factorial(--int);
      }
  }
  // Make a function called stringCombination that takes a string value type parameter
  function stringCombination(string){
    // If the type of parameter is int, then convert it to string
    if(typeof string == 'number'){
      string = string.toString();
    }
    // Make a for loop that loops as many as the function factorial with the parameter of string's length
    for(let i = 0; i <= factorial(string.length);i++){
      
    }
    console.log(`There are ${factorial(string.length)+1} combinations!`);
  }