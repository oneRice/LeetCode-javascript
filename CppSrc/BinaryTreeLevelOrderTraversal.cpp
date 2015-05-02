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
    void addLevelNum(vector<vector<int>> &res, TreeNode *root, int level) {
        if(root == NULL)
            return;
        if(res.size() == level) {
            vector<int> level;
            level.push_back(root->val);
            res.push_back(level);
        } else {
            res[level].push_back(root->val);
        }
        addLevelNum(res, root->left, level + 1);
        addLevelNum(res, root->right, level + 1);
        return;
    } 
    
    vector<vector<int> > levelOrder(TreeNode *root) {
        vector<vector<int>> res;
        if(root == NULL)
            return res;
        addLevelNum(res, root, 0);
        return res;
    }
};
