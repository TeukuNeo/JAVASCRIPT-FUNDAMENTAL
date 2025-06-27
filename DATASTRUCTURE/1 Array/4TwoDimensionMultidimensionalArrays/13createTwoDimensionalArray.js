
let twod = []
let rows = 5
for(let i = 0; i < rows; ++i){
    twod[i] = []
}

Array.matrix = function(numrows, numcols, initials){
    let arr = []
    for(let i = 0; i < numrows; ++i){
        let columns = []
        for(let j = 0; j < numcols; ++j){
            columns[j] = initials
        }
        arr[i] = columns 
    }
    return arr
}

let nums = Array.matrix(5,5,0)
console.log(nums[1][1])
let names = Array.matrix(3,3,"")
names[1][2] = "Joe"
console.log(names[1][2])
let grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]]
console.log(grades[2][2])



