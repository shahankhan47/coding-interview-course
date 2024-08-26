// FIFO.
// Add - enqueue
// Remove - dequeue

class Queue {
    constructor() {
        this.data = {};
        this.length = 0;
        this.currentIndex = 0;
    }

    /**Prints the queue */
    print() {
        return Object.values(this.data);
    }

    /**Returns the element at a particular index of the queue */
    access(num) {
        return this.data[num] ? this.data[num] : "Queue range exceeded";
    }

    /**Adds a new element in the queue. Returns the final length of queue */
    enqueue(elem) {
        if(!this.data[this.length]) {
            this.data[this.length] = elem;
        }
        this.length++;
        return this.length;
    }

    /**Removes the first element of the queue and returns it */
    dequeue() {
        let elem = this.data[this.currentIndex];
        delete this.data[this.currentIndex];
        this.currentIndex++;
        return elem;
    }

    /**Peek at the next element that will be removed if dequeue is called */
    peek() {
        return this.data[this.currentIndex];
    }
}

module.exports = Queue;