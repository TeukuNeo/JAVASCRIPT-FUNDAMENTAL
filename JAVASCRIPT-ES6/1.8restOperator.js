
//REST OPERATOR

function add1(nums1){
    console.log(nums1)
}
add1(4,5,7,8,12)
// Output is 4

function add2(nums2){
    console.log(arguments)
}
add2(4,5,7,8,12)
//Output is {0: 4, 1: 5, 2: 7, 3: 8, 4: 12}

function add3(...nums3){
    console.log(nums3)
}
add3(4,5,7,8,12)
// Output is [4,5,7,8,12]
