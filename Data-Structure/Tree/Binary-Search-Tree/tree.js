class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data);
        }
        else if (data < this.data) {
            this.left = new TreeNode(data);
        }
        else if (data > this.data && this.right) {
            this.right.insert(data);
        }
        else if (data > this.data) {
            this.right = new TreeNode(data);
        }
    }

    binarySearch(data) {
        if (this.data === data) {
            return this;
        }

        if ((this.data < data) && this.right) {
            return this.right.binarySearch(data);
        }
        else if ((this.data > data) && this.left) {
            return this.left.binarySearch(data);
        }

        return null;
    }
}

module.exports = TreeNode