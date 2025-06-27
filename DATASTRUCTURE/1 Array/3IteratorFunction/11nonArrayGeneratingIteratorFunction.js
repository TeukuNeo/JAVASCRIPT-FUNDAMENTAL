function square(num){
    console.log(num, num * num)
}
let nums = [1,2,3,4,5,6,7,8,9,10]
nums.forEach(square)
// output is
// 1 1
// 2 4
// 3 9
// 4 16
// 5 25
// 6 36
// 7 49
// 8 64
// 9 81
// 10 100

function isEven(otherNum){
    return otherNum % 2 == 0 
}

let otherNums = [2,4,6,8,10]
let even = otherNums.every(isEven)
if(even){
    console.log("All numbers are even")
}else{
    console.log("Not all numbers are even")
}
// the output is All numbers are even

let otherNums2 = [1,2,3,4,5,6,7,8,9,10]
let someEven = otherNums2.some(isEven)
if(someEven){
    console.log("Some numbers are even")
}else{
    console.log("No numbers are even")
}
// the output is Some numbers are even

otherNums2 = [1,3,5,7,9]
someEven = otherNums2.some(isEven)
if(someEven){
    console.log("Some numbers are even")
}else{
    console.log("No numbers are even")
}
// the output is No numbers are even

function add(runningTotal, currentValue){
    return runningTotal + currentValue
}
let otherNums3 = [1,2,3,4,5,6,7,8,9,10]
let sum = otherNums3.reduce(add)
console.log(sum) 
// the output is 55 and the way of how code is work like example down bellow
// add(1,2) -> 3
// add(3,3) -> 6
// add(6,4) -> 10
// add(10,5) -> 15
// add(15,6) -> 21
// add(21,7) -> 28
// add(28,8) -> 36
// add(36,9) -> 45
// add(45,10) -> 55

function concat(accumulatedString, item){
    return accumulatedString + item
}
let words = ["the ", "quick ", "brown ", "fox "]
let sentence = words.reduce(concat)
console.log(sentence)
// the output is the quick brown fox

sentence = words.reduceRight(concat)
console.log(sentence)
// the output is fox brown quick the



