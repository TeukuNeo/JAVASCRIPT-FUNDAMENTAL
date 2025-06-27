let people = ["alex", "eric", "andy"]
console.log(people[1])

const namaCemilan = ['🥞', '🥨', '🥐', '🌯', '🍥']
let kebab = namaCemilan.indexOf('🌯')
namaCemilan.push('🥖', '🍢')
namaCemilan.pop('')
for(let b = 0; b<namaCemilan.length; b++){
  console.log(namaCemilan[b])
 }
console.log(namaCemilan)

const punyaKu = ['🤑', '😎', '😜']
const punyaKamu = ['😈', '😮', '😍']
const mergeArray = punyaKu.concat(punyaKamu)
for(list of mergeArray) 
console.log(list)

const datas = 
[{name: 'henry', 
  age: 31, 
  job: 'employee'}, 
{name: 'donald', 
  age: 25, 
  job: 'manager'},
{
 name: 'eric',
  age: 23,
  job: 'mechanic'},
 {
 name: 'Dany',
  age: 22,
  job: 'software engineer'}]

  datas.map((value) =>{
    console.log(value.name, value.job)
  })