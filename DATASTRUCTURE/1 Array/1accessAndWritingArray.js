
let nums = []
for(let i = 0; i < 5; i++){
    nums[i] = i + 1;
    console.log(nums)
} // output is [1], [1,2], [1,2,3], [1,2,3,4], [1,2,3,4,5]

let numbers = [1,2,3,4,5]
let sums = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]
console.log(sums) // output is 15

let numbers2 = [1,2,3,5,8,13,21]
let sums2 = 0
for(let i = 0; i < numbers2.length; ++i){
    sums2 += numbers2[i]
    console.log(sums2)
} // output is 1,3,6,11,19,32,53

