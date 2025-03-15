class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkeList {
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

        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    }

    prepend(value) {
        const node = new LinkedListNode(value)

        node.next = this.head;
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
        return array
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
            const pointer = leader.next;

            leader.next = node
            node.next = pointer;

            this.length++;
        }
        return this
    }

    remove(index) {
        if (index >= this.length) {
            index = this.length-1;
        }
        const leader = this.__traverseToIndex(index-1);
        leader.next = leader.next?.next;
        this.length--;
        return this
    }

    reverse() {
        if (!this.head.next) {
            return this;
        }

        let first = this.head;
        this.tail = this.head
        let second = first.next;

        while(second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;

        return this.print()
    }
}

const linkedList = new LinkeList(10)
linkedList.append(15);
linkedList.append(20);
linkedList.prepend(5)
linkedList.insert(2, 17)
linkedList.insert(20, 25)
linkedList.remove(2)
linkedList.remove(20)
linkedList.print()
linkedList.reverse()