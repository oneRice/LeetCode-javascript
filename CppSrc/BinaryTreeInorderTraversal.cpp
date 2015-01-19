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
    vector<int> append(vector<int> src, vector<int> appendee)
    {
        int size = appendee.size();
        for(int i = 0; i < size; i++)
        {
            src.push_back(appendee[i]);
        }
        return src;
    }
    vector<int> inorderTraversal(TreeNode *root) {
        vector<int> ans;
        if(root == NULL) return ans;
        ans = append(ans, inorderTraversal(root->left));
        ans.push_back(root->val);
        ans = append(ans, inorderTraversal(root->right));
        return ans;
    }
};
