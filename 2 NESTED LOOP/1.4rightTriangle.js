let num = 5;
let pattern = "";    //pattern string
if (num > 1) {      //no star pattern for 0 or negative numbers.
    for (let i = 1; i <=num; i++) {    //first 'for loop' for horizontal lines
        for (let j = 1; j <= (num-i); j++) {    //second 'for loop' to add 'spaces' before pattern
            pattern += "  ";
        }

        for (let k = 1; k <= i; k++) {      //third 'for loop' to add * to pattern string
            pattern += "* ";
        }
        pattern += "\n";    //new line after row completion
    }
    console.log(pattern);   //printing star to console
}
else {
    pattern = "Number must be greater than 1 to print star pattern.";
}

