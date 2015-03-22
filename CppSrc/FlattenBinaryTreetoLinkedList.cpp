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
    void flatten(TreeNode *root) {
        if(root == NULL)
            return;
        std::vector<TreeNode *> flattened, stack;
        stack.push_back(root);
        while (stack.size() > 0) {
            TreeNode *current = stack.back();
            stack.pop_back();
            flattened.push_back(current);
            if (current->right)
                stack.push_back(current->right);
            if (current->left)
                stack.push_back(current->left);
        }

        flattened.push_back(NULL);
        for (int i = 0; i < flattened.size() - 1; ++i) {
            flattened[i]->left = NULL;
            flattened[i]->right = flattened[i+1];
        }
    }
};
