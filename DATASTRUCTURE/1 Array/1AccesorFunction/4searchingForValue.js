// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];

// rl.question("Enter a name to search for: ", (searchName) => {
//     let position = names.indexOf(searchName);
    
//     if (position >= 0) {
//         console.log("Found " + searchName + " at position " + position);
//     } else {
//         console.log(searchName + " not found in array.");
//     }

//     rl.close();
// });


let names = ["David", "Mike", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"]
let addName = "Mike"
let firstPost = names.indexOf(addName)
console.log("First found " + addName + " at position " + firstPost) 
let lastPost = names.lastIndexOf(addName)
console.log("Last found " + addName + " at position " + lastPost)
