let cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"]
let dmpDept = ["Raymond", "Cynthia", "Bryan"]
let itDiv = cisDept.concat(dmpDept);

console.log(itDiv)
itDiv = dmpDept.concat(cisDept)
console.log(itDiv)

let mixDept = ["Mike", "Clayton", "Terrill", "Raymond", "Cynthia", "Danny", "Jennifer"]
let splitDept = mixDept.splice(3,3)
let newDept = mixDept
console.log(splitDept)
console.log(newDept)