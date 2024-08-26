class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head=null;
    }

    insertAt(index, data) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index <= 0) {
            this.head = new Node(data, this.head);
            return;
        }

        let previous = this.getAt(index-1) || this.getLast();
        const node = new Node(data, previous?.next);
        previous.next = node;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let previous = this.getAt(index-1);
        if (previous?.next) {
            previous.next = previous?.next?.next;
            return;
        }
    }

    getAt(index) {
        let count = 0;
        let node = this.head;
        while (node) {
            if (count == index) {
                return node;
            }
            else {
                count++;
                node = node.next;
            }
        }
        return null;
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while(node) {
            yield node.data;
            node = node.next;
        }
    }


    // **** Redundant Code below =============================================================================


    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    insertLast(data) {
        const lastNode = this.getLast();

        if (lastNode) {
            lastNode.next = new Node(data);
        }
        else {
            this.head = new Node(data);
        }
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        return node;
    }

    removeFirst() {
        if(!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let node = this.head;
        while (node) {
            if (node?.next?.next == null) {
                node.next = null;
                return;
            }
            node = node.next;
        }
    }
}


module.exports = {Node, LinkedList};