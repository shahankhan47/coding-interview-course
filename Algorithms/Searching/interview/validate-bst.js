// Validate a Binary Search Tree

var isValidBST = function(root) {
    function valid(node, minimum, maximum) {
        if (!node) return true;
        console.log(node.value)
        if (!(node.value > minimum && node.value < maximum)) return false;

        return valid(node.left, minimum, node.value) && valid(node.right, node.value, maximum);
    }

    return valid(root, -Infinity, Infinity);    
};

module.exports = isValidBST