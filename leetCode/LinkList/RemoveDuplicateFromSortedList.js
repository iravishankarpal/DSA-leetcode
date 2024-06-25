const LL = require("./linkList")

let l1 = new LL()
l1.add(1)
l1.add(1)
l1.add(2)
l1.add(3)
l1.add(3)

let head = l1.linkListHead()
RemoveDuplicate(head)
l1.display()


function RemoveDuplicate(head) {
    let current = head;
    while (current != null && current.next != null) {
        if (current.val == current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    console.log('head resolved :', current);
    return current
}