
let nums = [1,2,3,7,8,9]
let newElements = [4,5,6]
nums.splice(3,0,newElements)
console.log(nums) // output is 1,2,3,4,5,6,7,8,9

let otherNum = [1,2,3,7,8,9]
otherNum.splice(3,0,4,5,6)
console.log(otherNum) // output is 1,2,3,4,5,6,7,8,9

let otherNums = [1,2,3,100,200,300,400,4,5]
otherNums.splice(3,4)
console.log(otherNums) // output is 1,2,3,4,5
