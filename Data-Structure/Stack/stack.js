class Stack {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    /**Prints the stack */
    print() {
        return Object.values(this.data)
    }

    /**Returns the element at a particular index of the stack */
    get(num) {
        return this.data[num] ? this.data[num] : "Array range exceeded";
    }

    /**Adds a new element in the stack. Returns the final length of stack */
    push(elem) {
        if(!this.data[this.length]) {
            this.data[this.length] = elem;
        }
        this.length++;
        return this.length;
    }

    /**Removes the last element of the stack and returns it */
    pop() {
        let elem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return elem;
    }

    /**Peek at the next element that will be removed if pop is called */
    peek() {
        return this.data[this.length-1];
    }
}

module.exports = Stack;