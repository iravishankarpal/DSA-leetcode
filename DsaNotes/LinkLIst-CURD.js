class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }
    add(data) {
        const newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
        this.size++
    }
    print() {
        let current = this.head
        if (this.head === null) {
            throw Error("No data")
        } else {
            let list = ""
            while (current !== null) {
                list = list + current.data + " -> "
                current = current.next
            }
            console.log(list)
        }
    }
}

let ll = new LinkList()
ll.add(1)
ll.add(2)
ll.add(3)
ll.print()