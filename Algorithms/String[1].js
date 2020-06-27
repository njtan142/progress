// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
    // Make a function called longestWord that takes a string value type parameter
    // If not string, convert to string
    // Declare an array called stringArr with the value of string separated by spaces
    // Declare an int variable called longest with the value of 0
    // Declare an int variable called longestIndex with the value of 0
    // Make a for loop that loops as many as the length of stringArr
        // If the length of stringArr at the index of the loop count is greater than the value of longest
            // store the value of the length of stringArr to the variable longest
            // store the value of loop count to to variable longestIndex
    // Return the value of stringArr at the index of the value of longest
    
    function longestWord(string){
        if(typeof string != 'string'){
            string = string.toString();
        }
        let stringArr = string.split(' ');
        let longest = 0;
        let longestIndex = 0;
        for(let i = 0; i < stringArr.length; i++){
            if(stringArr[i].length > longest){
                longest = stringArr[i].length;
                longestIndex = i;
            }
        }
        return stringArr[longestIndex];
    }