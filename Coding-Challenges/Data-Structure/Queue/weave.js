const Queue = require('./queue');

function weave(source1, source2) {
    const queue = new Queue();

    while (source1.peek() || source2.peek()) {
        if(source1.peek()) {
            queue.enqueue(source1.dequeue());
        }

        if(source2.peek()) {
            queue.enqueue(source2.dequeue());
        }
    }

    console.log(queue.print());
}

const source1 = new Queue();
source1.enqueue("Hi");
source1.enqueue("are");
source1.enqueue("doing");

const source2 = new Queue();
source2.enqueue("how");
source2.enqueue("you");
source2.enqueue("?");

weave(source1, source2)