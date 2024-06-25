class node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LL {
    constructor() {
        this.head = null
        this.size = 0
    }
    length() {
        console.log("Number of items in Linklist ", this.size)
    }
    linkListHead() {
        return this.head
    }
    display() {
        if (this.head == null) {
            console.log("No data")
        } else {
            let currnet = this.head
            let str = ""
            while (currnet) {
                str = str + currnet.data
                if (currnet.next !== null) {
                    str += "->"
                }
                currnet = currnet.next
            }
            console.log(str)
        }
    }
    add(data) {
        let newNode = new node(data)
        newNode.next = null
        this.size++
        if (this.head == null) {
            this.head = newNode
        } else {
            let currnet = this.head
            while (currnet.next !== null) {
                currnet = currnet.next
            }
            currnet.next = newNode
        }
    }
    addInMiddle(whereToInsert, data) {
        let newNode = new node(data)
        this.size++
        if (this.head == null) {
            this.head = newNode
        } else {
            let currnet = this.head
            while (currnet) {
                if (currnet.data == whereToInsert) {
                    let prevNode = currnet.next
                    newNode.next = prevNode
                    currnet.next = newNode
                    break
                }
                currnet = currnet.next
            }
        }
    }
}

module.exports = LL