class Solution {
public:
    void permuteVec(vector<vector<int>> &res, vector<int> setted, vector<int> left) {
        if (left.empty()) {
            res.push_back(setted);
            return;
        }

        for (int i = 0; i < left.size(); i++) {
            vector<int> tempLeft;
            vector<int> tempSetted = setted;
            tempSetted.push_back(left[i]);
            for (int j = 0; j < left.size(); j++) {
                if (i == j)
                    continue;
                tempLeft.push_back(left[j]);
            }
            permuteVec(res, tempSetted, tempLeft);
        }

        return;
    }

    vector<vector<int>> permute(vector<int> &num) {
        vector<vector<int>> res;
        vector<int> v;
        permuteVec(res, v, num);
        return res;
    }
};
