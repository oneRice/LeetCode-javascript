/**
 * Definition for binary tree with next pointer.
 * struct TreeLinkNode {
 *  int val;
 *  TreeLinkNode *left, *right, *next;
 *  TreeLinkNode(int x) : val(x), left(NULL), right(NULL), next(NULL) {}
 * };
 */
class Solution {
public:
    void connect(TreeLinkNode *root) {
        if(root == NULL)
            return;
        if(root->left && root->right) 
            root->left->next = root->right;
            
        TreeLinkNode *firstLeft = NULL;
        TreeLinkNode *firstRight = NULL;
        if(root->next)
        {
            firstLeft = root->right ? root->right : root->left;
            for (TreeLinkNode * tempRoot = root->next; tempRoot != NULL; tempRoot = tempRoot->next) {
                if (tempRoot->left) {
                    firstRight = tempRoot->left;
                    break;
                }
                if (tempRoot->right){
                    firstRight = tempRoot->right;
                    break;
                }
            }
        }

        if(firstLeft)
            firstLeft->next = firstRight;

        connect(root->right);
        connect(root->left);
        return;
    }
};
