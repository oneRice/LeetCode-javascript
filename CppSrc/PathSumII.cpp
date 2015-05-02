/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    vector<vector<int>> pathSum(TreeNode* root, int sum) {
        vector<vector<int> > res;
        vector<int> solution;
        getAllSum(res, solution, root, sum);
        return res;
    }
    
    void getAllSum(vector<vector<int> > &res, vector<int> &solution, TreeNode *root, int sum) {
        if (root == NULL)
            return;
        if (root->left == NULL && root->right == NULL) {
            solution.push_back(root->val);
            if (getSum(solution) == sum)
                res.push_back(solution);
            solution.pop_back();
            return;
        }
        
        solution.push_back(root->val);
        getAllSum(res, solution, root->left, sum);
        getAllSum(res, solution, root->right, sum);
        solution.pop_back();
        return;
    }
    
    int getSum(vector<int> vec) {
        int sum = 0;
        for (int i = 0; i < vec.size(); i++) {
            sum += vec[i];
        }
        return sum;
    }
};
