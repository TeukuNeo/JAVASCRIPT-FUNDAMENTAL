
// let nums = []
// for(let i = 0; i < 10; ++i){
//     nums[i] = i + 1
// }
// let samenums = nums
// nums[0] = 300
// console.log(samenums[0])

function copy(arr1, arr2){
    for(let i = 0; i < arr1.length; ++i){
        arr2[i] = arr1[i]
    }
}
let nums = []
for(let i = 0; i < 100; ++i){
    nums[i] = i + 1
}
let samenums = []
copy(nums, samenums)
nums[0] = 400
console.log(nums[0], samenums[0])

