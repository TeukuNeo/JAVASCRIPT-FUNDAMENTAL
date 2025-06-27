function curve(grade){
    return grade = grade + 5
}
let grades = [77,65,81,92,83]
let newGrades = grades.map(curve)
console.log(newGrades)
// output is [ 82, 70, 86, 97, 88 ]



function first(word){
    return word[0]
}
let words = ["for","your","information"]
let acronym = words.map(first)
console.log(acronym.join(""))
// output is "fyi"



function isEven(num){
    return num % 2 == 0
}
function isOdd(num){
    return num % 2 != 0
}
let nums = []
for(let i = 0; i < 30; ++i){
    nums[i] = i + 1
}
let evens = nums.filter(isEven)
console.log("Even numbers: " + evens) // output is Even numbers: 2,4,6,8,10,12,14,16,18,20,22,24,26,28,30
let odds = nums.filter(isOdd)
console.log("Odd numbers: " + odds) // output is Odd numbers: 1,3,5,7,9,11,13,15,17,19,21,23,25,27,29



function passing(otherNum){
    return otherNum >= 60
}
let otherGrades= []
for(let i = 0; i < 20; i++){
    otherGrades[i] = Math.floor(Math.random() * 101)
}
let passGrades = otherGrades.filter(passing)
console.log("All grades: ")
console.log(otherGrades)
console.log("Passsing grades: ")
console.log(passGrades)
//  All grades:
//  39,43,89,19,46,54,48,5,13,31,27,95,62,64,35,75,79,88,73,74
//  Passing grades:
//  89,95,62,64,75,79,88,73,74



function afterc(str){
    if(str.indexOf("cie") > -1){
        return true
    }else{
        return false
    }
}
let otherWords = ["recieve","deceive","percieve","deceit","concieve"]
let misspelled = otherWords.filter(afterc)
console.log(misspelled)
// displays recieve,percieve,concieve


