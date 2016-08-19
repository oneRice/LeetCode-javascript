/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) {
        return;
    }

    var temp = root.left;

    root.left = invertTree(root.left);
    root.right = invertTree(root.right)

    return root;
};