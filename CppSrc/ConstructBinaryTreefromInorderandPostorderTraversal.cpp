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
    TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder) {
        if (inorder.empty())
            return NULL;
            
        return buildTreeWithIndex(inorder, 0, inorder.size()-1, postorder, 0, postorder.size()-1);
    }
    
    TreeNode *buildTreeWithIndex(vector<int>& inorder, int inLow, int inup,
                                 vector<int>& postorder, int postLow, int postUp) {
        if (inLow > inup || postLow > postUp)
            return NULL;
                                 
        TreeNode *head = new TreeNode(postorder[postUp]);
        int i = getIndex(inorder, postorder[postUp]);
        int leftNum = i - inLow;
        int rightNum = inup - i;
        
        head->left = buildTreeWithIndex(inorder, inLow, inLow + leftNum - 1, postorder, postLow, postLow + leftNum - 1);
        head->right = buildTreeWithIndex(inorder, inup - rightNum + 1, inup, postorder, postUp - rightNum, postUp - 1);

        return head;
    }

    int getIndex(const vector<int> &vec, int num) {
        for (int i = 0; i < vec.size(); i++) {
            if (vec[i] == num) {
                return i;
            }
        }
        return -1;
    }
};
