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
    vector<TreeNode *> generateTrees(int n) {
        vector<TreeNode *> res;
        vector<vector<int> > possible;
        vector<vector<int> > used;
        possible = getAllpossible(n);
        for (int i = 0; i < possible.size(); i++) {
            if (isUsed(used, possible[i]))
                continue;

            generateRes(res, possible[i], used);
        }
        return res;
    }

    vector<vector<int> > getAllpossible(int n) {
        vector<vector<int> > res;
        vector<int> origin;
        for (int i = 1; i <= n; i++) {
            origin.push_back(i);
        }
        vector<int> solu;
        generateAllChoiceComp(res, solu, origin);
        return res;
    }

    void generateAllChoiceComp(vector<vector<int> > &res, vector<int> &solu, vector<int> &remain) {
        if (remain.size() == 0){
            res.push_back(solu);
        }

        for (int i = 0; int i < remain.size(); i++) {
            solu.push_back(remain[i]);
            remain.erase(remain.begin() + i);
            generateAllChoiceComp(res, solu, remain);
            remain.insert(remain.begin() + i);
            solu.pop_back();
        }

        return;
    }

    int isUsed(vector<vector<int> > &used, vector<int> i) {
        if (used.find(i) != used.end())
            return true;
        return false;
    }

    void generateRes(vector<TreeNode *> &res, vector<int> &convert, vector<vector<int> > &used) {
        TreeNode * current = new TreeNode(convert[0]);
        for (int i = 1; i < convert.size(); i++) {
            findAndAppend(current, convert[i]);
        }
        res.push_back(current);
        getAllUsed(used, current);
        return;
    }

    void findAndAppend(TreeNode *head, int val) {
        TreeNode *closestNode = findClosest(head, val);
        if (val > closestNode->val) {
            closestNode->right = new TreeNode(val);
        } else {
            closestNode->left = new TreeNode(val);
        }
        return;
    }

    TreeNode *findClosest(TreeNode *head, val) {
        if (head == NULL)
            return NULL;

        if (val > head->val) {
            if (head->right == NULL)
                return head;
            return findClosest(head->right, val);
        } else {
            if (head->left == NULL)
                return head;
            return findClosest(head->left, val);
        }
    }

    void getAllUsed(vector<vector<int> > used, TreeNode *head) {
        vector<int> solu;
        getAllUsedWithDirection(used, solu,)
    }


};
