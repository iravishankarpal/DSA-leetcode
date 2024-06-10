class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Function to traverse and print the elements of the linked list
function traverseLinkedList(head) {
    // Start from the head of the linked list
    let current = head;

    // Traverse the linked list until reaching the end (null)
    while (current !== null) {
        // Print the data of the current node
        console.log(current.data + " ");

        // Move to the next node
        current = current.next;
    }

    console.log();
}

// Example usage:
// Assuming the linked list is already constructed

// Create nodes
let head = new Node(1);
let second = new Node(2);
let third = new Node(3);

// Connect nodes
head.next = second;
second.next = third;

// Call the traverseLinkedList function to print the linked list elements
traverseLinkedList(head);