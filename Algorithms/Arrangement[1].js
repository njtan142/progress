// Write a JavaScript function that reverse a number
  // Make a function that takes one parameter(integer value type)
    // Convert the integer to string and pass it to a string variable called intToString
    // Declare an array variable called reverseIntArr
    // Make a for loop that loops as many as the intToString's length
      // Unshift the intToString at the index of i to the reverseIntArr
    // Convert the reverseIntArr into string an assign it to intToString
    // return the intToString converted into int
    
// Write a JavaScript function that reverse a number
  // Make a function that takes one parameter(integer value type)
  function reverseInt(int){
    // Convert the integer to string and pass it to a string variable called intToString
    let intToString = int.toString();
    // Declare an empty array variable called reverseIntArr
    let reverseIntArr = [];
    // Make a for loop that loops as many as the intToString's length
    for(let i = 0; i < intToString.length; i++){
      // Unshift the intToString at the index of i to the reverseIntArr
      reverseIntArr.unshift(intToString[i]);
    }
    // Convert the reverseIntArr into string an assign it to intToString
    intToString = reverseIntArr.join('');
    // return the intToString converted into int
    return parseInt(intToString);
  }