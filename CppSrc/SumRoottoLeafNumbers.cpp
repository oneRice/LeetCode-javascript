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
        int sum = 0;
        int route = 0;
        record(sum, route, root);
        return sum;
    }

    void record(int &sum, int route, TreeNode *root) {
        if (root == NULL)
            return;

        route = plusbit(route + root->val);
        
        if (root->left == NULL && root->right == NULL) {
            sum += route;
            return;
        }

        record(sum, route, root->left);
        record(sum, route, root->right);

        return;
    } 

    int plusbit(int cur, int bit) {
        return 10 * cur + bit;
    }
};
