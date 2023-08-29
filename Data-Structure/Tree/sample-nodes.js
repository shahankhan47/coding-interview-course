const {TreeNode, Tree} = require('./tree-node');

const rootNode = new TreeNode("Saiyan Origin");

rootNode.add("Bardock");
rootNode.add("King Vegeta");

const bardock = rootNode.children[0];
const kingVegeta = rootNode.children[1];

kingVegeta.add("Vegeta");
kingVegeta.add("Tarble");

bardock.add("Goku");
bardock.add("Raditz");
bardock.add("Turles");

const goku = bardock.children[0];
const vegeta = kingVegeta.children[0];

goku.add("Goten");
goku.add("Gohan");
vegeta.add("Trunks");

const saiyanTree = new Tree();
saiyanTree.root = rootNode;

console.log(`Width of the tree is: ${saiyanTree.calulateWidth()}`);
console.log(`Total nodes in tree are: ${saiyanTree.totalNodes()}`);
console.log(JSON.stringify(rootNode.toJSON()));