
function personFactory (name) {
    return {
        talk () {
            return `Hello I am ${name}`
        }
    }
}

const me = personFactory('Neo')
console.log(me.talk())

function createElement (type, text, color) {
    const el = document.createElement(type)
    el.innerText = text
    el.style.color = color
    document.body.append(el) 
    return {
        el,
        setText(text) {
            el.innerText = text
        } ,
        setColor(color) {
            el.style.color = color
        } 
    }
}

const h1 = createElement('h1', 'Hey guys', 'red')
console.log(h1)