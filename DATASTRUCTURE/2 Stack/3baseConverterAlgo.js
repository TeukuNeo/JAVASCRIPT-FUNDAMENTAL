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

function baseConverter(decNumber, base) {
    let remStack = new Stack()
    let rem
    let baseString = ''
    let digits = '0123456789ABCDEF'

    while (decNumber > 0) {
        rem = Math.floor(decNumber % base)
        remStack.push(rem)
        decNumber = Math.floor(decNumber / base)
    }

    while (!remStack.isEmpty()) {
        baseString = baseString + digits[remStack.pop()]
    }

    return baseString
}

console.log(baseConverter(100346, 2))