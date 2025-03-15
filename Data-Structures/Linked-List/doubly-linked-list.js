class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkeList {
    constructor(value) {
        this.head = new LinkedListNode(value)

        this.tail = this.head;
        this.length = 1;
    }

    __traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    append(value) {
        const node = new LinkedListNode(value)

        node.previous = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    }

    prepend(value) {
        const node = new LinkedListNode(value)

        node.next = this.head;
        this.head.previous = node;
        this.head = node;
        this.length++;
        return this;
    }

    print() {
        const array = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array)
        return this
    }

    insert(index, value) {
        if (index >= this.length) {
            this.append(value)
        }
        else if (index === 0) {
            this.prepend(value);
        }
        else {
            const node = new LinkedListNode(value);
            const leader = this.__traverseToIndex(index-1);
            const follower = leader.next;

            leader.next = node
            node.previous = leader;
            node.next = follower;
            follower.previous = node

            this.length++;
        }
        return this
    }

    remove(index) {
        if (index >= this.length) {
            index = this.length-1;
        }
        const leader = this.__traverseToIndex(index-1);
        const follower = leader?.next?.next;
        if (follower) {
            follower.previous = leader;
        }
        leader.next = follower ?? null;
        this.length--;
        return this
    }

    
}

const linkedList = new DoublyLinkeList(10)
linkedList.append(15);
linkedList.append(20);
linkedList.prepend(5)
linkedList.insert(2, 17)
linkedList.insert(0, 25)
linkedList.print()
linkedList.remove(2)
linkedList.remove(20)