/**
 * Note disini kita memiliki 3 cara melakukan inherintace
*/

// -----------------------------------------
// Inheritance using a Constructor Function

function newPerson(){}
newPerson.prototype.talks = function() {
    return 'Talking'
}

const he = new newPerson()
console.log(he.talks())

const person = {
    talk() {
        return 'Talking'
    }
}

// -----------------------------------------
// Inheritance using pure objects with Object.create

const me = Object.create(person)
console.log(me.talk())

// -----------------------------------------
// Inheritance using pure objects with Object.setPrototypeOf

const you = {}
Object.setPrototypeOf(you, person)
console.log(you.talk())

