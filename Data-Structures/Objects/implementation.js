class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    // O(1) - because the name of the key is getting looped not the whole memory table
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    // O(1) - no loop. Directly setting the value
    set(key, value) {
        const hash = this._hash(key);
        // To avoid collision:
        if (!this.data[hash]) {
            this.data[hash] = [];
        }
        this.data[hash].push([key, value]);
    }

    // O(1) - when no collision. O(n) - with collision
    get(key) {
        const hash = this._hash(key);
        const currentBucket = this.data[hash];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    // O(n) - looping through the whole memory addresses
    keys() {
        if (!this.data.length) {
            return undefined
        }
        let result = []
        // loop through all the elements
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
                // but also loop through all the potential collisions
                if (this.data.length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        result.push(this.data[i][j][0])
                    }
                } else {
                    result.push(this.data[i][0])
                }
            }
        }
        return result;
    }

    // O(n) - looping through the whole memory addresses
    values() {
        const values = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                values.push(this.data[i][0][1]);
            }
        }
        return values;
    }
}

const myTable = new HashTable(50);
myTable.set('firstName', "John");
myTable.set('lastName', "Doe");
myTable.set('age', 13);
myTable.set('isStudent', true);
console.log(myTable.get('firstName'));
console.log(myTable.get('lastName'));
console.log(myTable.get('age'));
console.log(myTable.get('isStudent'));
console.log(myTable.keys());
console.log(myTable.values());