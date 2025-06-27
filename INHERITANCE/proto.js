/**
 * Selanjutnya dengan menggunakan Proto 
 * kita dapat mengupdate nilai pada class
 */

class Person {
    talk(){
        return "Talking"
    }
}

const me = new Person()
const you = new Person()

console.log(me.talk()) // first output

Person.prototype.talk = function(){
    return 'New and improved talking'
}

console.log(me.talk()) // update output

const human = {
    kind: 'Human'
}

const neo = Object.create(human)
neo.age = 20

const hassan = Object.create(neo)
hassan.age = 20 - 7

console.log(neo.kind)
console.log(neo.age)

console.log(hassan.kind)
console.log(hassan.age)