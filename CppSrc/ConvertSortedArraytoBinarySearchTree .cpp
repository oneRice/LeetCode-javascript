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
    vector <int> getSection(std::vector<int> &num, int start, int end) {
        std::vector<int> nu;
        if(end < start)
            return nu;
        if(end == start) {
            nu.push_back(num[start]);
            return nu;
        }
        std::vector<int>::iterator startIter = num.begin() + start;
        std::vector<int>::iterator endIter = num.begin() + end + 1;
        std::vector<int> v(startIter, endIter);
        return v;
    }

    TreeNode *sortedArrayToBST(vector<int> &num) {
        if(num.empty())
            return NULL;
        int size = num.size();
        int mid = size / 2;
        TreeNode* root = new TreeNode(num[mid]);
        vector<int> left = getSection(num, 0, mid - 1);
        root->left = sortedArrayToBST(left);
        vector<int> right = getSection(num, mid + 1, size - 1);
        root->right = sortedArrayToBST(right);
        return root;
    }
};
