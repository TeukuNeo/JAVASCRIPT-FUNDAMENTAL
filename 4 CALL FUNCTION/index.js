
const person = {
    fullname: function(){
        return this.firstname + " " + this.lastname;
    }
}

const person1 = {
    firstname: 'Teuku',
    lastname: 'Neo'
}

const person2 = {
    firstname: 'Teuku',
    lastname: 'Hassan'
}

console.log(person.fullname.call(person2))