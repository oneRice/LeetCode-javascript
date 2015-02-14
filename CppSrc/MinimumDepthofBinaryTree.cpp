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
    int mindepth = 0;
    
    bool isleaf(TreeNode *root) {
        if(root->left == NULL && root->right == NULL)
            return true;
        return false;
    }
    
    void updateMinDepth(int depth) {
        if(mindepth == 0)
            mindepth = depth;
        if(mindepth > depth)
            mindepth = depth;
        return;
    }

    void getMinDepth(TreeNode *root, int upDepth) {
        if(root == NULL)
            return;
        if(isleaf(root))
            updateMinDepth(upDepth + 1);
        else if(mindepth != 0 && mindepth <= upDepth + 1) {
            return;
        } else {
            getMinDepth(root->left, upDepth + 1);
            getMinDepth(root->right, upDepth + 1);
        }
        return;
    }

    int minDepth(TreeNode *root) {
        getMinDepth(root, 0);
        return mindepth;    
    }
};
