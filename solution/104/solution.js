/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var max = function(a, b) {
    return (a > b) ? a : b;
};

var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    return max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};