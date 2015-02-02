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
    bool isMirror(TreeNode *leftRoot, TreeNode *rightRoot) {
        if(leftRoot == NULL && rightRoot == NULL)
            return true;
        if(leftRoot == NULL || rightRoot == NULL)
            return false;
        if(leftRoot->val != rightRoot->val)
            return false;
        return isMirror(leftRoot->left, rightRoot->right)
            && isMirror(leftRoot->right, rightRoot->left);
    }
    
    bool isSymmetric(TreeNode *root) {
        if(root ==  NULL) 
            return true;
        if(root->left == NULL && root->right == NULL)
            return true;
        if(root->left == NULL || root->right == NULL)
            return false;
        return isMirror(root->left, root->right);
    }
};
