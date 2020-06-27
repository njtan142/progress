// Write a JavaScript function that returns a passed string with letters in alphabetical order.
    // Make a function called alphabeticalOrder that takes one string value type parameter
        // If not string, convert to string 
        // Declare an array called order with the value of string sliced(separated) by every character
        // Sort the order array 
        // Declare a string variable called alphabetical and set the value to order array joined by an empty string
        // Return alphabetical
        
    function alphabeticalOrder(string){
        if(typeof string != 'string'){
            string = string.toString();
        }
        let order = string.split('');
        order.sort();
        let alphabetical = order.join('');
        return alphabetical;
    }