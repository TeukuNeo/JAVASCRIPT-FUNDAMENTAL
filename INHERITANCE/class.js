/**
 * Note:
 * Jadi kurang lebih jika kita menggunakan class
 * maka kita dapat menggunakn kode yang sama berulang kali
 * tanpa harus membuat kode yang sama
 */

class Person {
    talk(){
        return "Talking"
    }
}

const me = new Person()
const you = new Person()

console.log(me.talk())
console.log(you.talk())
