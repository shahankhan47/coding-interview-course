// Breadth First Search:
// Time: O(n) Space: O(n)
// Has more memory requirement than dfs.
// Search a tree or graph left to right. That is, all nodes of each level of a tree level by level.

//              9
//          4       20
//        1  6    15  170

// This will traverse in order - [9, 4, 20, 1, 6, 15, 170]

const BinaryTree = require("../../Data-Structures/Trees/binary-search-tree");

class Tree extends BinaryTree {
    constructor() {
        super()
    }

    breadthFirstSearch(value) {
        let currentNode = this.root;
        let list = [];                      // To insert in order
        let queue = [];                     // To keep track of elements in upper levels
        queue.push(currentNode);            // Start by adding the root node in queue

        while (queue.length > 0) {
            currentNode = queue.shift();
            if (currentNode.value === value) {
                return currentNode
            }

            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }
        return undefined
    }

    // This is difficult to understand and execute the search. Where is the search? Why is a list being returned?
    breadthFirstSearchRecursive(queue, list) {
        if (!queue.length) {
            return list;
        }

        let currentNode = queue.shift();
        list.push(currentNode.value)
        if (currentNode.left) {
            queue.push(currentNode.left)
        }
        if (currentNode.right) {
            queue.push(currentNode.right)
        }

        return this.breadthFirstSearchRecursive(queue, list)
    }
}

const tree = new Tree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
// console.log(tree.breadthFirstSearch(20))
// console.log(tree.breadthFirstSearchRecursive([tree.root], [], 20))


// Validating a BST:
const validateTree = require("./interview/validate-bst");
console.log(validateTree(tree))