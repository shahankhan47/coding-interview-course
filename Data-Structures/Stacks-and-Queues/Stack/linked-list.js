class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0
    }

    peek() {
        return this.top;
    }

    push(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.top = node;
            this.bottom = node;
        }
        else {
            const pointer = this.top;
            this.top = node;
            this.top.next = pointer;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.top) {
            return null
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        const pointer = this.top;
        this.top = this.top?.next;
        this.length--;
        return this;    // or return pointer
    }
}

const stack = new Stack();
console.log(stack.peek());
console.log(stack.push("google"));
console.log(stack.push("udemy"));
console.log(stack.push("youtube"));

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());