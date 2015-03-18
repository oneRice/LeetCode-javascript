/**
 * Definition for binary tree
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class BSTIterator {
    vector<int> sorted;
    int curr;
public:
    BSTIterator(TreeNode *root) {
        treeToVector(root);
        curr = 0;
    }

    /** @return whether we have a next smallest number */
    bool hasNext() {
        if (curr < sorted.size()) {
            return true;
        }

        return false;
    }

    /** @return the next smallest number */
    int next() {
        if (hasNext()) {
            curr++;
            return sorted[curr - 1];
        }

        return -1;
    }

    void treeToVector(TreeNode *root) {
        if (root == NULL)
            return;

        treeToVector(root->left);
        sorted.push_back(root->val);
        treeToVector(root->right);

        return;
    }
};

/**
 * Your BSTIterator will be called like this:
 * BSTIterator i = BSTIterator(root);
 * while (i.hasNext()) cout << i.next();
 */
