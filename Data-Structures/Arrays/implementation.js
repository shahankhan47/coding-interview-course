const a = []    // built-in

// Implementation
// Arrays in JS are just object with Integers (indexes) as keys

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    //O(1)
    get(index) {
        return this.data[index]
    }

    //O(1)
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    //O(1)
    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--;
        return lastItem;
    }

    //O(n)
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        for(let i=index; i<this.length-1; i++) {
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const newArr = new MyArray();
newArr.push("A");
newArr.push('B');
newArr.push('C');
newArr.pop();
newArr.push('D');
newArr.delete(0)
console.log(newArr)
console.log(newArr.get(0))

module.exports = MyArray;