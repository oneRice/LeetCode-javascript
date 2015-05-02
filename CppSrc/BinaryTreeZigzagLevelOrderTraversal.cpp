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
    void addLevelNum(vector<vector<int>> &res, TreeNode *root, int level) {
        if(root == NULL)
            return;
        if(res.size() == level) {
            vector<int> level;
            level.push_back(root->val);
            res.push_back(level);
        } else {
            res[level].push_back(root->val);
        }
        addLevelNum(res, root->left, level + 1);
        addLevelNum(res, root->right, level + 1);
        return;
    }
    
    void reverse(vector<vector<int>> &res) {
        for (int i = 1; i <= res.size()/2; i++) {
            int index = 2 * i - 1;
            reverseVec(res[index]);
        }
        return;
    }
    
    void reverseVec(vector<int> &vec) {
        int low = 0;
        int up = vec.size()-1;
        while (low < up) {
            swap(vec[low], vec[up]);
            low ++;
            up --;
        }
        return;
    }
    
    void swap(int &a, int &b) {
        int temp = a;
        a = b;
        b = temp;
        return;
    }
    
    vector<vector<int> > zigzagLevelOrder(TreeNode *root) {
        vector<vector<int>> res;
        if(root == NULL)
            return res;
        addLevelNum(res, root, 0);
        reverse(res);
        return res;
    }
};
