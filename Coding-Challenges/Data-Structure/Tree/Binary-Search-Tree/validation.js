function validate(node, min=null, max=null) {
    if (max && node.data > max ) {
        return false;
    }

    if (min && node.data < min) {
        return false;
    }

    if (node.left && !validate(node.left, min, node.data)) {
        return false;
    }

    if (node.right && !validate(node.right, node.data, max)) {
        false;
    }

    return true;
}