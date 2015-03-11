class Solution {
public:
    vector<vector<int> > combine(int n, int k) {
        vector<vector<int> > res;
        vector<int> temp;
        combineIter(res, temp, n, k);
        return res;
    }

    void combineIter(vector<vector<int>> &res, vector<int> v, int max, int len) {
        if (len == v.size()) {
            res.push_back(v);
            return;
        }
        int currMax = 0;
        if (!v.empty()) {
            currMax = v.back();
        }
        for (int i = currMax + 1; i <= max - len + v.size() + 1; i++) {
            vector<int> temp = v;
            temp.push_back(i);
            combineIter(res, temp, max, len);
        }

    }
};
