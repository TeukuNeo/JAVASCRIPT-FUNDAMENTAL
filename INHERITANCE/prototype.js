
function Dude(name) {
    this.name = name
}

const me = new Dude('Neo')

console.log(me.__proto__ === Dude.prototype)

Dude.prototype.talk = function () {
    return 'Talking'
}

console.log(me.talk())