
//CLASS AND OBJECT
var bellBoy1 = {
    name: "Danis",
    age: 17,
    permit: true,
    language: "English, mandarin"
}

//CONSTRUCTOR FUNCTION
function bellBoy(name, age, permit, language){
   this.name = name
   this.age = age
   this.permit = permit
   this.language = language
}

//INITIALIZE OBJECT
var bellBoy2 = new bellBoy('Jimmy', 23, true, 'Turkey')

//CLASS AND OBJECT EXAMPLE
let houseKeeper1 = {
    name: 'Eric',
    age: 35,
    yearOfExperience: true
}

function houseKeeper(name, age, yearOfExperience){
    this.name = name;
    this.age = age;
    this.yearOfExperience = yearOfExperience;
    this.clean = function(){
        alert('im bout to clean')
    }
}

let houseKeeper2 = houseKeeper('danis', 19, true)
console.log(houseKeeper2)