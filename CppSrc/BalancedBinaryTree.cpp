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
    int getDepth(TreeNode *root) {
        if(root == NULL)
            return 0;
        int left = 1, right = 1;
        left += getDepth(root->left);
        right += getDepth(root->right);
        return left > right? left: right;
    }

    bool isBalanced(TreeNode *root) {
        if(root == NULL)
            return true;
        int left = getDepth(root->left);
        int right = getDepth(root->right);
        if(left - right > 1 || left -right < -1)
            return false;
        return isBalanced(root->left) && isBalanced(root->right);
    }
};
