const Stack = require('./stack');

class QueueFromStack {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    print() {
        return this.stack1.print();
    }

    access(num) {
        return this.stack1.get(num);
    }

    enqueue(elem) {
        this.stack1.push(elem)
        return this.stack1.length;
    }

    dequeue() {
        while(this.stack1.peek()) {
            this.stack2.push(this.stack1.pop());
        }
        let record = this.stack2.pop();

        while(this.stack2.peek()) {
            this.stack1.push(this.stack2.pop());
        }

        return record;
    }

    peek() {
        while(this.stack1.peek()) {
            this.stack2.push(this.stack1.pop());
        }
        let record = this.stack2.peek();

        while(this.stack2.peek()) {
            this.stack1.push(this.stack2.pop());
        }

        return record;
    }
}


const queue = new QueueFromStack();
queue.enqueue("Michael");
queue.enqueue("Jim");
queue.enqueue("Dwight");
queue.enqueue("Pam");
queue.enqueue("Ryan");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.print());
console.log(queue.peek());
console.log(queue.access(1));
console.log(queue.print());
