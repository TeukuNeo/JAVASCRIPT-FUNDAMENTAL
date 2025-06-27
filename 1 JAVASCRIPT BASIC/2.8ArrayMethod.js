//17 Important Array Method in Javasrcipt

let name1 = ['Neo', 'Halim', 'Bran', 'Oya']
let name2 = ['Acil', 'zul', 'Alice']

let output = name1.toString()
console.log(output)
// Neo,Halim,Bran,Oya

let output2 = name1.join(' ')
console.log(output2)
// Neo Halim Bran Oya

let output3 = name1.concat(name2)
console.log(output3)
// ['Neo', 'Halim', 'Bran', 'Oya','Acil', 'zul', 'Alice']

let output5 = name1.indexOf('Bran')
console.log(output5)
// 2

let output6 = name1.lastIndexOf('Oya')
console.log(output6)
// 3

let name3 = ['Dani', 'Bill', 'Eric', 'Dwayne']
name3.splice(1,1)
console.log(name3)
// ['Dani', 'Eric', 'Dwayne']

let name4 = ['Dani', 'Bill', 'Eric', 'Dwayne', 'Neo', 'Halim', 'Bran', 'Oya']
name4.forEach((n) => {
    console.log(n)
})
// Dani
// Bill
// Eric
// Dwayne
// Neo
// Halim
// Bran
// Oya

let sortName = name4.sort()
console.log(sortName)
// ['Bill', 'Bran','Dani', 'Dwayne','Eric', 'Halim','Neo',  'Oya']

let sliceName = name4.slice(3,7)
console.log(sliceName)
// [ 'Dwayne', 'Eric', 'Halim', 'Neo' ]

let nums = [1,2,3,4,5,6,7,8,9]
let numOutput = nums.map((n) => n * 2)
console.log(numOutput)
// [2,  4,  6,  8, 10, 12, 14, 16, 18]

let numOutput3 = nums.reduce((numOutput3, currentVal) => numOutput3 + currentVal)
console.log(numOutput3)
// 45

let greteaterThan45 = nums.some((n) => n > 38)
console.log(greteaterThan45)
// false

let greaterThan0 = nums.every((n) => n > 0)
console.log(greaterThan0)
// true

let nums2 = [1,2,3,4,[5,6,7],8,9]
let numOutput2 = nums2.flat()
console.log(numOutput2)
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

let posts = [
    {title: 'post1', author: 'dani'},
    {title: 'post2', author: 'ian'},
    {title: 'post3', author: 'benny'}
]
let postFilter = posts.filter((p) => p.author === 'ian')
console.log(postFilter)
// [ { title: 'post2', author: 'ian' } ]

let stock = [
    {item: 'ketchup', quantity: 23},
    {item: 'mayo', quantity: 8},
    {item: 'sauce', quantity: 12}
]
let stockFind = stock.find((n) => n.item === 'mayo')
console.log(stockFind)
// { item: 'mayo', quantity: 8 }

let foundIndex = stock.findIndex((n) => n.item === 'mayo')
console.log(foundIndex)
// 1