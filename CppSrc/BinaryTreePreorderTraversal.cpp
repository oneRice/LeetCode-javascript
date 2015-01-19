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
    vector<int> getAppend(vector<int> src, vector<int> add)
    {
        int size = add.size();
        if(size == 0) return src;
        for(int i = 0; i < size; i++)
        {
            src.push_back(add[i]);
        }
        return src;
    }
    vector<int> preorderTraversal(TreeNode *root) {
        vector<int> ans, temp;
        int tempSize = 0;
        if(root == NULL) return ans;
        ans.push_back(root->val);
        ans = getAppend(ans, preorderTraversal(root->left));
        ans = getAppend(ans, preorderTraversal(root->right));
        return ans;
    }
};
