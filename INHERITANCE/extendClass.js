class Person {
    talk(){
        return "Talking"
    }
}

class Superhuman extends Person{
    fly(){
        return "You can fly away.."
    }
}

const me = new Person()

const you = new Superhuman()

console.log(you.talk())
console.log(you.fly())

/**
 * Note:
 * Jika kita menggunakan extends maka
 * kita dapat menambahkan class baru dengan class yang lama
 * kurang lebih kita dapat menggunakan class baru di barengi dengan class yang lama
 */