const TreeNode = require('./tree');

const node = new TreeNode(10);
node.insert(20);
node.insert(5);

node.insert(30);
node.insert(15);

node.insert(7);
node.insert(3);

node.insert(1);
node.insert(4);

node.insert(16);
node.insert(14);

// console.log(node);
console.log(node.binarySearch(15));
