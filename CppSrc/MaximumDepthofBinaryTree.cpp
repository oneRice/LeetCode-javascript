/**
 * Definition for binary tree
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
#define DEPTH_OF_NODE 1

class Solution {
public:
    //Get the larger of two number
    int findMax(int a, int b)
    {
        return (a>b)?a:b;
    }

    int maxDepth(TreeNode *root) {
        if(root == NULL)//the base, the null node has no depth
        {
            return 0;
        }
        else//the depth of the tree is the depth of its son plus its own depth 
        {
            return DEPTH_OF_NODE + findMax(maxDepth(root->left), maxDepth(root->right));
        }
    }
};
