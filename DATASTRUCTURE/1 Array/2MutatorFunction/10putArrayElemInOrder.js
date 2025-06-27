let nums = [1,2,3,4,5]
nums.reverse()
console.log(nums) // output is [ 5, 4, 3, 2, 1 ]

let names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"]
names.sort()
console.log(names) // output is [ 'Bryan', 'Clayton', 'Cynthia', 'David', 'Mike', 'Raymond' ]

function compare(num1,num2){
    return num1 - num2
}
let otherNum = [3,1,2,100,4,200]
otherNum.sort(compare)
console.log(otherNum) // output is [ 1, 2, 3, 4, 100, 200 ]


