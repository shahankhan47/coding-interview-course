/**
 * 0----2
 *      |\
 *      | \
 *      1--3
 */

// The above graph can be represented in the following ways:

//Edge List - Each sub array contains relationships and nodes (first element)
const edgeGraph = [[0,2], [2,3], [2,1], [1,3]]

//Adjacent List - the index of array is the nodes
//  and each element in the index specifies how many other nodes that node is connected to.
const adjacentListGraph = [[2], [2,3], [0,1,3], [1,2]]
const adjacentListGraphObj = {
    0: [2],
    1: [2,3],
    2: [0,1,3],
    3: [1,2]
}

//Adjacent Matrix: rows are the nodes, columns are relationships (1 - means connected, 0 - not connected)
// In weighted graph, use the weights instead of 1's.
const adjacentMatrixGraph = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
]
const adjacentMatrixGraphObj = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0]
}