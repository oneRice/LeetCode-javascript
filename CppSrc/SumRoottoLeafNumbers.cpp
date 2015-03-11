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
    int sumNumbers(TreeNode *root) {
        vector<vector<int>> sum;
        vector<int> route;
        record(sum, route, root);
        return sumall(sum);
    }

    void record(vector<vector<int>> &sum, vector<int> route, TreeNode *root) {
        if (root == NULL)
            return;

        route.push_back(root->val);
        
        if (isLeaf(root)) {
            sum.push_back(route);
            return;
        }

        record(sum, route, root->left);
        record(sum, route, root->right);

        return;
    } 

    bool isLeaf(TreeNode *root) {
        if (root->left == NULL && root->right == NULL)
            return true;
        return false;
    }

    int sumall(vector<vector<int>> &sum) {
        int sumall = 0;
        for (vector<vector<int>>::iterator isum = sum.begin(); isum != sum.end(); ++isum) {
            int currSum = 0;
            for (vector<int>::iterator i = (*isum).begin(); i != (*isum).end(); ++i) {
                currSum *= 10;
                currSum += *i;
            }
            sumall += currSum;
        }
        return sumall;
    }
};
