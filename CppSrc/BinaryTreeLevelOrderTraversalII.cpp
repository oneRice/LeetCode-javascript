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
    vector<vector<int>> reverse(vector<vector<int>> input) {
        vector<vector<int>> res;
        while(!input.empty()) {
            res.push_back(input.back());
            input.pop_back();
        }
        return res;
    }

    vector<vector<int>> addLevelNum(vector<vector<int>> res, TreeNode *root, int level) {
        if(root == NULL)
            return res;
        if(res.size() == level) {
            vector<int> level;
            level.push_back(root->val);
            res.push_back(level);
        } else {
            res[level].push_back(root->val);
        }
        res = addLevelNum(res, root->left, level + 1);
        res = addLevelNum(res, root->right, level + 1);
        return res;
    } 
    
    vector<vector<int>> levelOrderBottom(TreeNode *root) {
        vector<vector<int>> res;
        if(root == NULL)
            return res;
        res = addLevelNum(res, root, 0);
        res = reverse(res);
        return res;
    }
};
