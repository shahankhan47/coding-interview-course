class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.first = node;
            this.last = node;
        }
        else {
            this.last.next = node;
            this.last = node
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (!this.first) {
            return null
        }
        if (this.first === this.last) {
            this.last = null;
        }
        const pointer = this.first;
        this.first = this.first.next;
        this.length--;
        return this;    // or return pointer
    }
}

const queue = new Queue();
console.log(queue.enqueue("Shahan"))
console.log(queue.enqueue("Zohhak"))
console.log(queue.enqueue("Osama"))
console.log(queue.peek())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())