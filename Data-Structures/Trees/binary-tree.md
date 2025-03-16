Each node has 0, 1 or 2 children
Each child can only have 1 parent.
Each node represents a certain state.

Full Binary Tree:
- No node has only 1 child.
- Bottom layer may or may not be completely filled.

Perfect Binary Tree:
- Binary tree is full
- No node has only 1 child.
- Bottom layer is completely filled.
- No of nodes are doubled in the next level.
- No of nodes on the bottom level = Sum of nodes in all levels + 1.
- No of nodes in each level can be calculated by:
    - level 0 = 2^0 = 1
    - level 1 = 2^1 = 2
    - level 2 = 2^2 = 4
    - and so on.
- Total no of nodes = (2^h - 1)         (h=height of tree)
- So n = 2^h -> log n = h Therefore Big O is log n.

Big O:
lookup  - O(log n)
insert  - O(log n)
delete  - O(log n)

Binary Search Tree:
- All child nodes to the right of the root node must be greater than the current node.
- A node can only have upto 2 children (because it's binary)
- Good video about BST: https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12365004

Balanced vs Unbalanced Trees:
- In a situation where after adding the root node, we keep adding nodes that are greater than the previous ones, all the nodes will be placed on the right side of their parent node. In this situation the tree looks more like a long linked list because there's only one path to traverse. This is called an unbalanced tree.
- Unbalanced trees are bad because it's complexity will be O(n) instead of O(log n). Similar to linked-list.

To balance a tree we use:
- AVL Tree
- Red Black Tree
- Video: https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12367604

Pros and Cons of BST:
Pros:
- Better than O(n)
- Ordered
- Flexible Size

Cons:
- No O(1) operations


Video explaining the remove method for binary tree:
https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12367214