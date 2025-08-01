// CLASSES

export class Animal {
    constructor(type, legs){
        this.type = type
        this.legs = legs
    }
    makeNoise(sound = 'Loud noise'){
        console.log(sound)
    }
    get metaData(){
        return `Type: ${this.type}, Legs: ${this.legs}`
    }
    static return10(){
        return 10
    }
}
export class Cat extends Animal {
    constructor(type, legs, tail){
       super(type, legs)
       this.tail = tail 
    }
    makeNoise(sound = "meow"){
       console.log(sound)
    }
}


