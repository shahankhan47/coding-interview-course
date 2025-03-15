class Stack {
    constructor() {
        this.stack = []
    }

    peek() {
        return this.stack[this.stack.length-1] ? this.stack[this.stack.length-1] : null
    }

    push(value) {
        this.stack.push(value)
        return this;
    }

    pop() {
        this.stack.pop();
        return this
    }
}

const stack = new Stack()
console.log(stack.peek());
console.log(stack.push("google"));
console.log(stack.push("udemy"));
console.log(stack.push("youtube"));
console.log(stack.peek());
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())