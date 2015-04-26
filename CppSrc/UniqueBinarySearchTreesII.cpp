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
    	vector<int> source;
    	for (int i = 1; i <= n; i++) {
    		source.push_back(i);
    	}
    	return generateTreesBySource(source, 0, n - 1);
    }

    vector<TreeNode *> generateTreesBySource(vector<int> &source, int left, int right) {
    	vector<TreeNode *> nodeList;
        if (left > right) {
            nodeList.push_back(NULL);
            return nodeList;
        }

    	for (int i = left; i <= right; i++) {
    		vector<TreeNode *> leftlist = generateTreesBySource(source, left, i - 1);
    		vector<TreeNode *> rightlist = generateTreesBySource(source, i + 1, right);
    		generateAllPossibleAndAdd(nodeList, source[i], leftlist, rightlist);
    	}
    	return nodeList;
    }

    void generateAllPossibleAndAdd(vector<TreeNode *> &nodeList, int headVal, vector<TreeNode *> &left, vector<TreeNode *> &right) {
        for (int l = 0; l < left.size(); l++) {
            for (int  r = 0; r < right.size(); r++) {
                TreeNode *head = new TreeNode(headVal);
                head->left = left[l];
                head->right = right[r];
                nodeList.push_back(head);
            }
        }
        return;
    }
};
