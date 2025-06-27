
//DESTRUCTURING OBJECTS

const personalInformation = {
    firstName: 'Teuku',
    lastName: 'Neo',
    city: 'medan',
    state: 'sumut',
    zipcode: 232511
}
const {firstName: fn, lastName: ln} = personalInformation;
console.log(`${fn} ${ln}`)

