//Write a JavaScript program to check whether it is possible to rearrange characters of a given string in such way that it will become equal to another given string
  // Make a function that takes two parameters(string value types)
    // Check if the two given strings' length are the same
      // If not true, return false
      // Else
        // Convert the string to array for each string and pass it to another variables and sort those arrays
        // Declare a boolean variable and set it to true
        // Make a for loop to parse through every item in array(declare a variable with a value of zero then check if the declared variable is less than the length of the array, and if true, increment the declared variable)
          // If the two arrays at the index of the value of the declared variable is the same, continue
          // Else set the boolean variable to false and break the loop
        // Return the boolean variable
        
        
//Write a JavaScript program to check whether it is possible to rearrange characters of a given string in such way that it will become equal to another given string
  // Make a function that takes two parameters(string value types)
  function arrangement0(string1, string2){
    // Check if the two given strings' length are the same
    if(string1.length != string2.length){
      // If not true, return false
      return false;
    }
      // Else
      else{
        // Convert the string to array for each string and pass it to another variables and sort those arrays
        let stringArr1 = string1.split('');
        let stringArr2 = string2.split('');
        stringArr1.sort();
        stringArr2.sort();
        // Declare a boolean variable and set it to true
        let boolean = true;
        // Make a for loop to parse through every item in array(declare a variable with a value of zero then check if the declared variable is less than the length of the array, and if true, increment the declared variable)
        for(let i = 0; i < stringArr1.length; i++){
          // If the two arrays at the index of the value of the declared variable is the same, continue
          if(stringArr1[i] == stringArr2[i]){
            continue;
          }
          // Else set the boolean variable to false and break the loop
            else{
              boolean = false;
              break;
            }
          }
        // Return the boolean variable
        return boolean;
      }
  }