// Depth First Search:
// Time: O(n) Space: Depends but worst case is O(h) using recursion. Where h = maximum depth of tree
// Has less memory requirement than bfs.
// Search a tree or graph top to bottom going left first. Once a leaf node is detected, go back to the parent.

//              9
//          4       20
//        1  6    15  170

// This will traverse in order - [9, 4, 1, 6, 20, 15, 170]
// Three ways to order:
// 1. In-order - starting from leftmost leaf and go up. [1, 4, 6, 9, 15, 20, 170] - list is sorted.
// 2. Pre-order - starting from parent then down left to right. [9, 4, 1, 6, 20, 15, 170] - useful to re-create a tree.
// 3. Post-order - start with all leaf nodes first then go up left to right. [1, 6, 4, 15, 170, 20, 9]

const BinaryTree = require("../../Data-Structures/Trees/binary-search-tree");

class Tree extends BinaryTree {
    constructor() {
        super()
    }

    dFSInOrderWithRecursion() {
        return traverseInOrder(this.root, []);
    }

    dFSPostOrderWithRecursion() {
        return traversePostOrder(this.root, []);
    }

    dFSPreOrderWithRecursion() {
        return traversePreOrder(this.root, []);
    }
}

function traverseInOrder(node, list) {
    if (node.left) {
        traverseInOrder(node.left, list)
    }
    list.push(node.value)
    if (node.right) {
        traverseInOrder(node.right, list)
    }
    return list
}

function traversePreOrder(node, list) {
    list.push(node.value)
    if (node.left) {
        traverseInOrder(node.left, list)
    }
    if (node.right) {
        traversePreOrder(node.right, list)
    }
    return list
}

function traversePostOrder(node, list) {
    if (node.left) {
        traversePostOrder(node.left, list)
    }
    if (node.right) {
        traversePostOrder(node.right, list)
    }
    list.push(node.value)
    return list
}

const tree = new Tree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

const searchInOrder = tree.dFSInOrderWithRecursion()
console.log(searchInOrder)

const searchPreOrder = tree.dFSPreOrderWithRecursion()
console.log(searchPreOrder)

const searchPostOrder = tree.dFSPostOrderWithRecursion()
console.log(searchPostOrder)