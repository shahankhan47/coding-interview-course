A Tree data structure has parent and child nodes.
Each parent node contains some data as well as a reference to all child node.

We can traverse a tree by 2 methods:
1. Breadth First - start from top, go down one level then traverse from left to right every element and repeat
    going down one level at a time.

2. Depth First - Start from top, and then keep going down from the left most children until you reach the depth.
    Go one level up and check if the parent has other nodes or not.
    If yes keep going down left most and repeat.
    If no, then keep going up and repeat.