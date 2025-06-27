let num = 5;
let pattern = "";    //pattern string
if (num > 1) {      //no star pattern for 0 or negative numbers.
    for (let i = 1; i <= num; i++) {    //first 'for loop' for horizontal lines
        for (let j = 0; j <= (num-i); j++) {    //second 'for loop' for opposite pattern
            if (j==0 || j==(num-i) || i==1) {   //condition to make pattern hollow
                pattern += "* ";
            } else {
                pattern += "  ";    // spaces to make pattern hollow
            }
        }
        pattern += "\n";    //new line after row completion
    }
    console.log(pattern);   //printing star to console
}
else {
    pattern = "Number must be greater than 1 to print star pattern.";
}

