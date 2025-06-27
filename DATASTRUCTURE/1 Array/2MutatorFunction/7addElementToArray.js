
let nums = [1,2,3,4,5]
nums.push(6)
console.log(nums)
//output is [1,2,3,4,5,6]

nums[nums.length] = 7
console.log(nums)
//output is [1,2,3,4,5,6,7]

let otherNums = [2,3,4,5]
let newNum = 1
let N = otherNums.length
for(let i = N; i >= 0; --i){
    otherNums[i] = otherNums[i-1]
}
otherNums[0] = newNum
console.log(otherNums)
// output is [1,2,3,4,5]

let anotherNums = [2,3,4,5]
console.log(anotherNums) // output is [2,3,4,5]

let newNums = 1
anotherNums.unshift(newNums)
console.log(anotherNums) // output is [ 1, 2, 3, 4, 5 ]

anotherNums = [3,4,5]
anotherNums.unshift(newNums,1,2)
console.log(anotherNums) // output is [ 1, 1, 2, 3, 4, 5 ]

