//              9
//          4       20
//        1  6    15  170 

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const node = new TreeNode(value);
        if (this.root === null) {
            this.root = node;
        }
        else {
            let currentNode = this.root;
            while(true) {
                if (value < currentNode.value) {
                    //Left
                    if(!currentNode.left) {
                        currentNode.left = node;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
                else {
                    //Right
                    if(!currentNode.right) {
                        currentNode.right = node;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value) {
        if(!this.root) {
            return false;
        }
        let currentNode = this.root;
        while(currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left
            }
            else if (value > currentNode.value) {
                currentNode = currentNode.right;
            }
            else if (value === currentNode.value) {
                return currentNode;
            }
        }
        return false;
    }

    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;

        while(currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            }
            else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            }
            else if (value === currentNode.value) {
                // Option 1: No right child
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    }
                    else {
                        // If parent > current, make current left child a left child of parent.
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;
                        }

                        // If parent < current, make current left child a right child of parent.
                        else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left
                        }
                    }
                }

                // Option 2: Right child with no left child
                else if (currentNode.right.left === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    }
                    else {
                        currentNode.right.left = currentNode.left;

                        // If parent > current, make left child of parent as the right child of current
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;
                        }

                        // If parent < current, make right child of parent as the right child of current
                        else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }
                }

                // Option 3: Right child with a left child
                else {
                    //find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                        parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                        parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
    }
}

function traverse(node) {
    const tree = {value: node.value};
    tree.left = node.left === null ? null :
        traverse(node.left);
    tree.right = node.right === null ? null :
        traverse(node.right);
    return tree;
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.lookup(19)
tree.remove(9)

module.exports = BinarySearchTree