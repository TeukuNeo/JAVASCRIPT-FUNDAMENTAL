let size = 5;
let pattern = "";    //pattern string
if (size > 1) {      //no star pattern for 0 or negative numbers.
    for (let row = 1; row <= size; row++) {    //first 'for loop' for horizontal lines
        for (let col = 1; col <= row; col++) {      //second 'for loop' to print star
            pattern += "* ";    //adding * to pattern string
        }
        pattern += "\n";    //new line after row completion
    }
    console.log(pattern);   //printing star to console
}
else {
    pattern = "Number must be greater than 1 to print star pattern.";
}