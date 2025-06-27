
let grades = [[89,77,78],[76,82,81],[91,94,89]]
let total = 0
let average = 0.0
for(let row = 0; row < grades.length; ++row){
    for(let col = 0; col < grades[row].length; ++col){
        total = total + grades[row][col]
    }
    average = total / grades[row].length
    console.log("Student " +  parseInt(row+1) + " average: " + average.toFixed(2))
    total = 0
    average = 0.0
}
// Student 1 average: 81.33
// Student 2 average: 79.67
// Student 3 average: 91.33


let otherGrades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]]
let otherTotal = 0
let otherAverage = 0.0
for(let otherCol = 0; otherCol < otherGrades.length; ++otherCol){
    for(let otherRow = 0; otherRow < otherGrades[otherCol].length; ++otherRow){
        otherTotal += otherGrades[otherRow][otherCol]
    }
    otherAverage = otherTotal / otherGrades[otherCol].length
    console.log("Test " + parseInt(otherCol+1) + " Average: " + otherAverage.toFixed(2))
    otherTotal = 0
    otherAverage = 0.0
}
// Test 1 Average: 85.33
// Test 2 Average: 84.33
// Test 3 Average: 82.67