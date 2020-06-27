// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
    // Make a function called title that takes a string value type parameter
        // If not string, convert to string
        // Declare an array called titleArr with the value of the string split(separated) by spaces
        // Make a for loop that loops as many the length of titleArr
            // Change the first index(first character) of titleArr at the index of the loop count to upper case
        // Declare a string variable called title with the value of titleArr joined by spaces
        // Return the value of  title
        
    function title(string){
        if(typeof string != 'string'){
            string = string.toString();
        }
        let titleArr = string.split(' ');
        for(let i = 0; i < titleArr.length; i++){
            let firstLetter = titleArr[i][0].toUpperCase();
            let restCharacters = titleArr[i].slice(1);
            titleArr[i] = firstLetter + restCharacters;
        }
        let title = titleArr.join(' ');
        return title;
    }
            