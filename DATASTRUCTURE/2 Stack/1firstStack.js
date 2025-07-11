function Stack() {

    let items = []

    this.push = function (element) {
        items.push(element)
    }

    this.pop = function () {
        return items.pop()
    }

    this.peek = function () {
        return items[items.length - 1]
    }

    this.isEmpty = function () {
        return items.length == 0
    }

    this.clear = function () {
        items = []
    }

    this.size = function () {
        return items.length
    }

    this.print = function () {
        console.log(items.toString())
    }

}

let stack = new Stack()

stack.push(5)
stack.push(8)


console.log(stack.peek())

stack.push(11)
console.log(stack.size())
console.log(stack.isEmpty())

console.log(stack.print())