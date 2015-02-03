/**
 * Definition for binary tree
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    bool isLeaf(TreeNode *root) {
        if(root->left == NULL && root->right == NULL) {
            return true;
        }
        return false;
    }
    
    bool hasSum(TreeNode *root, int present, int sum) {
        if(root == NULL)
            return false;
        if(root->val + present == sum && isLeaf(root))
            return true;
        return hasSum(root->left, root->val + present, sum)
            || hasSum(root->right, root->val + present, sum);
    }

    bool hasPathSum(TreeNode *root, int sum) {
        return hasSum(root, 0, sum);
    }
};
