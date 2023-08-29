class TreeNode {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new TreeNode(data));
    }

    remove(data) {
        // Awesome knowledge here.
        // Filter will remove the element that would amount to false in the function
        // and return a new array with that element removed which can be assigned to the
        // original array variable.
        this.children = this.children.filter(node => {
            return node.data !== data;
        })
    }

    /**Returns the tree in a JSON format having data and children as key */
    toJSON() {
        return {
            data: this.data,
            children: this.children.map(child => child.toJSON())
        };
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    /**
     * Logic:
     * 1. Create an array with first element as root node.
     * 2. Take out first element from array and check if it has children.
     * 
     * 3. If it has, take out all children and push them at end to the array.
     * 
     * 4. Run the given function on that node and throw it away.
     * 5. Repeat for rest of array while the array has elements.
     */
    traverseBreadthFirst(func) {
        const arr = [this.root];
        while(arr.length) {
            const node = arr.shift();
            arr.push(...node.children);
            func(node);
        }
    }

    /**
     * Logic:
     * 1. Create an array with first element as root node.
     * 2. Take out first element from array and check if it has children.
     * 
     * 3. If it has, take out all children and push them at first to the array.
     * 
     * 4. Run the given function on that node and throw it away.
     * 5. Repeat for rest of array while the array has elements. 
     */
    traverseDepthFirst(func) {
        const arr = [this.root];
        while(arr.length) {
            const node = arr.shift();
            arr.unshift(...node.children);
            func(node);
        }
    }

    /**
     * Given the root node of a tree, return an array where each element is the width of the tree at each level.
        Example
        Given:
            0
        / |  \
        1   2   3
        |       |
        4       5
        Answer: [1, 3, 2]
    */
    // Width always calculated using breadth-first method.
    calulateWidth() {
        const arr = [this.root, 's'];
        const counters = [0];
    
        while(arr.length > 1) {
            const node = arr.shift();
            if(node === 's') {
                counters.push(0);
                arr.push('s');
            }
            else {
                arr.push(...node.children);
                counters[counters.length-1]++;
            }
        }
    
        return counters;
    }

    /**Returns the total number of nodes in the tree */
    totalNodes() {
        const width = this.calulateWidth();
        return width.reduce((a,b) => a+b);
    }
}

module.exports = {TreeNode, Tree}