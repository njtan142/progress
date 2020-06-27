// Make a JavaScript program that returns true if the word is a palindrome and false if not
    // Make a function called palindrome that takes a string value type parameter
        // Declare a string variable called word that has the value of the parameter converted to string even if the parameter given is already string(some jerk might input numbers instead of string)
        // Declare an empty array called placeholder
        // Declare an empty string variable called reverseWord
        // Make a loop that loops as many as the variable word
            // Push variable word at the index of i at the beginning placeholder array
        // Convert the value of placeholder array into string and reverseWord variable will hold that value
        // If word and reverseWord is the same 
            // return true
        // Else
            // return false
            
            
function palindrome(string){
    let word = string.toString();
    let placeholder = [];
    let reverseWord = '';
    for(let i = 0; i < word.length; i++){
        placeholder.unshift(word[i]);
    }
    reverseWord = placeholder.join('');
    if(word == reverseWord){
        return true;
    }
    else{
        return false;
    }
}