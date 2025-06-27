let nums = [1,2,3,4,5,9]
nums.pop()
console.log(nums) // output is [1,2,3,4,5]

let num = [9,1,2,3,4,5]
for(let i = 0; i < num.length; ++i){
    num[i] = num[i+1]
}
console.log(num) // output is [1,2,3,4,5,undefined]

let otherNum = [9,1,2,3,4,5]
otherNum.shift()
console.log(otherNum) // output is [1,2,3,4,5]

let anotherNum = [6,1,2,3,4,5]
let first = anotherNum.shift()
anotherNum.push(first)
console.log(anotherNum) // output is [ 1, 2, 3, 4, 5, 6 ]
