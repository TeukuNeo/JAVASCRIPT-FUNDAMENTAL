
// studentName = ['Alex', 'Benny', 'Jason', 'Derryck', 'Vito']
// studentName.splice(1,1)
// studentName.splice(1,0,'Bob')
// studentList = 5

// for(let row = 0; row < studentList; row++) {
//     console.log(row + 1, studentName[row])
// }

studentDesc = ['No', 'Name', 'Address', 'Age']
studentValue = ['1', 'Johnny', 'Citra Garden', '20']

let width = 10
const columnWidth = 20
let headerDesc = ' '
let headerRow = ' '

function padString(str, width) {
    return str.padEnd(width, ' ');
}

for(let col = 0; col < studentDesc.length; col++) {
    headerDesc += padString(studentDesc[col], columnWidth)
}

for(let col = 0; col < studentValue.length; col++) {
    headerRow += padString(studentValue[col], columnWidth)
}

console.log(headerDesc.trim())
console.log(headerRow.trim())