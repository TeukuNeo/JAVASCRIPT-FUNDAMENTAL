function LinkedList() {

    let Node = function (element) {
        this.element = element
        this.next = null
    }

    let length = 0
    let head = null

    this.append = function (element) {
        let node = new Node(element)
        let current

        if (head === null) {
            head = node
        } else {
            current = head

            while (current.next) {
                current = current.next
            }

            current.next = node
        }

        length = length + 1
    }

    this.insert = function (position, element) {

        if (position >= 0 && position <= length) {

            let node = new Node(element)
            let current = head
            let previous
            let index = 0

            if (position === 0) {

                node.next = current
                head = node
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
            }

            length = length + 1
            return true
        }
    }

    this.removeAt = function (position) {

        if (position > -1 && position < length) {

            let current = head
            let previous
            let index = 0

            if (position === 0) {
                head = current.next
            } else {

                while (index++ < position) {

                    previous = current
                    current = current.next
                }

                previous.next = current.next
            }

            length = length - 1

            return current.element

        } else {
            return null
        }
    }

    this.remove = function (element) { }

    this.indexOf = function (element) { }

    this.isEmpty = function () { }

    this.size = function () { }

    this.toString = function () { }

    this.print = function () { }

}

let list = new LinkedList()
list.append(15)
list.append(10)