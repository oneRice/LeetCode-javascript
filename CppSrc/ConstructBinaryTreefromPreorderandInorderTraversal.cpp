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
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
        if (inorder.empty())
            return NULL;
            
        return buildTreeWithIndex(inorder, 0, inorder.size()-1, preorder, 0, preorder.size()-1);
    }
    
    TreeNode *buildTreeWithIndex(vector<int>& inorder, int inLow, int inup,
                                 vector<int>& preorder, int preLow, int preUp) {
        if (inLow > inup || preLow > preUp)
            return NULL;
                                 
        TreeNode *head = new TreeNode(preorder[preLow]);
        int i = getIndex(inorder, preorder[preLow]);
        int leftNum = i - inLow;
        int rightNum = inup - i;
        
        head->left = buildTreeWithIndex(inorder, inLow, inLow + leftNum - 1, preorder, preLow + 1, preLow + leftNum);
        head->right = buildTreeWithIndex(inorder, inup - rightNum + 1, inup, preorder, preUp - rightNum + 1, preUp);

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
